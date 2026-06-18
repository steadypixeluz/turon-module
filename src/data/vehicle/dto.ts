import {
  IsString,
  IsOptional,
  IsNumber,
  IsBoolean,
  IsEnum,
  IsMongoId,
  IsDateString,
  ValidateNested,
  Min,
  IsArray,
} from 'class-validator';
import { Transform, Type } from 'class-transformer';

// ─── Nested DTOs ──────────────────────────────────────────────────────────────

export class BodyDimensionsDto {
  @IsOptional()
  @IsNumber()
  @Min(0)
  length?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  width?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  height?: number;
}

export class RouteDto {
  @IsString()
  country: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  radius?: number;

  @IsOptional()
  @IsString()
  region?: string;
}

export class RateDto {
  @IsEnum(['has_rate', 'request_rate'])
  mode: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  priceWithVat?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  priceWithoutVat?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  priceCash?: number;

  @IsOptional()
  @IsString()
  currency?: string;

  @IsOptional()
  @IsBoolean()
  byCard?: boolean;

  @IsOptional()
  @IsBoolean()
  noNegotiation?: boolean;
}

export class CompanyDto {
  @IsOptional()
  @IsEnum(['legal', 'individual'])
  type?: string;

  @IsOptional()
  @IsString()
  company?: string;

  @IsOptional()
  @IsString()
  country?: string;

  @IsOptional()
  @IsString()
  contactPerson?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  region?: string;

  @IsOptional()
  @IsString()
  note?: string;
}

// ─── Main Create DTO ──────────────────────────────────────────────────────────

export class CreateVehicleDto {
  @IsOptional()
  @IsMongoId()
  bodyType?: string;

  @IsOptional()
  @IsEnum(['semi_trailer', 'truck', 'coupling'])
  vehicleCategory?: string;

  @IsOptional()
  @IsMongoId({ each: true })
  loadingTypes?: string[];

  @IsOptional()
  @IsMongoId()
  carryingCapacity?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  bodyVolume?: number;

  @IsOptional()
  @ValidateNested()
  @Type(() => BodyDimensionsDto)
  bodyDimensions?: BodyDimensionsDto;

  @IsOptional()
  @IsBoolean()
  gpsMonitoring?: boolean;

  @IsOptional()
  @IsEnum(['готов_к_загрузке', 'постоянный'])
  readinessType?: string;

  @IsOptional()
  @IsDateString()
  availableFrom?: string;

  @IsOptional()
  @IsNumber()
  archiveAfterDays?: number;

  @ValidateNested()
  @Type(() => RouteDto)
  route: RouteDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => RateDto)
  rate?: RateDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CompanyDto)
  company?: CompanyDto;
}

export class UpdateVehicleDto extends CreateVehicleDto {}

export class SearchVehicleDto {
  @IsOptional()
  @IsMongoId()
  loadingCountry?: string;

  @IsOptional()
  @IsMongoId()
  loadingRegion?: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  loadingRadius?: number; // km
  @IsOptional()
  @IsMongoId()
  unloadingCountry?: string;

  @IsOptional()
  @IsMongoId()
  unloadingRegion?: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  unloadingRadius?: number; // km

  // ── Грузоподъёмность (т) ──────────────────────────────────────────────────

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  capacityFrom?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  capacityTo?: number;

  // ── Объём кузова (м³) ─────────────────────────────────────────────────────

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  volumeFrom?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  volumeTo?: number;

  // ── Тип кузова ────────────────────────────────────────────────────────────

  /** Array of Dictionary ObjectId refs for body types */
  @IsOptional()
  @IsArray()
  @IsMongoId({ each: true })
  @Transform(({ value }) => (Array.isArray(value) ? value : [value]))
  bodyTypes?: string[];

  // ── Дата погрузки ─────────────────────────────────────────────────────────

  /** "С сегодняшнего дня" or exact range start */
  @IsOptional()
  @IsDateString()
  loadingDateFrom?: string;

  @IsOptional()
  @IsDateString()
  loadingDateTo?: string;

  // ── Доп. параметры ────────────────────────────────────────────────────────

  /** Габариты — body dimension filter (L x W x H) */
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  dimLengthMin?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  dimWidthMin?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  dimHeightMin?: number;

  /** Догруз — partial load available */
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value === 'true' || value === true)
  partialLoad?: boolean;

  /** Тип загрузки — loading type refs */
  @IsOptional()
  @IsArray()
  @IsMongoId({ each: true })
  @Transform(({ value }) => (Array.isArray(value) ? value : [value]))
  loadingTypes?: string[];

  /** Поиск по фирмам — search by company name */
  @IsOptional()
  @IsString()
  companyName?: string;

  /** Оплата — payment mode filter */
  @IsOptional()
  @IsString()
  paymentMode?: string;
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value === 'true' || value === true)
  calculate?: boolean;
  /** Опасные грузы — dangerous goods */
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value === 'true' || value === true)
  dangerousGoods?: boolean;
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value === 'true' || value === true)
  enRoute?: boolean;
  // ── Pagination ────────────────────────────────────────────────────────────

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  offset?: number;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Type(() => Number)
  limit?: number = 20;

  /** Sort: newest | capacity | date */
  @IsOptional()
  @IsString()
  sortBy?: 'newest' | 'capacity' | 'date' = 'newest';
}
