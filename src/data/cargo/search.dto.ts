import {
  IsOptional,
  IsMongoId,
  IsNumber,
  IsEnum,
  IsArray,
  IsDate,
  IsString,
  IsBoolean,
} from 'class-validator';
import { Type, Transform } from 'class-transformer';

export class GetCargosDto {
  // ── Pagination ───────────────────────────────
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  offset?: number = 0;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  limit?: number = 20;

  // ── Откуда ───────────────────────────────────
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
  @Type(() => Number)
  @IsNumber()
  loadingLat?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  loadingLng?: number;

  // ── Куда ─────────────────────────────────────
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

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  unloadingLat?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  unloadingLng?: number;

  // ── Вес ──────────────────────────────────────
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  weightFrom?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  weightTo?: number;

  // ── Объем ────────────────────────────────────
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  volumeFrom?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  volumeTo?: number;

  // ── Тип кузова ───────────────────────────────
  @IsOptional()
  @IsArray()
  @IsMongoId({ each: true })
  @Transform(({ value }) => (Array.isArray(value) ? value : [value]))
  bodyTypes?: string[];
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value === 'true' || value === true)
  enRoute?: boolean;
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value === 'true' || value === true)
  calculate?: boolean;
  // ── Тип загрузки / выгрузки ──────────────────
  @IsOptional()
  @IsArray()
  @IsMongoId({ each: true })
  @Transform(({ value }) => (Array.isArray(value) ? value : [value]))
  loadingTypes?: string[];

  @IsOptional()
  @IsArray()
  @IsMongoId({ each: true })
  @Transform(({ value }) => (Array.isArray(value) ? value : [value]))
  unloadingTypes?: string[];

  // ── Дата погрузки ────────────────────────────
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  readyDateFrom?: Date;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  readyDateTo?: Date;

  // ── Оплата ───────────────────────────────────
  @IsOptional()
  @IsEnum(['negotiable', 'nonegotiable', 'request'])
  paymentMode?: string;
  @IsOptional()
  @IsEnum(['all', 'alone', 'partial'])
  partialLoad?: string;
  @IsOptional()
  @IsString()
  currency?: string;

  // ── Наименование груза ───────────────────────
  @IsOptional()
  @IsMongoId()
  cargoType?: string;

  // ── Поиск по названию ────────────────────────
  @IsOptional()
  @IsString()
  search?: string;
}
