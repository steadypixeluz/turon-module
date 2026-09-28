import {
  IsArray,
  IsOptional,
  IsString,
  IsEnum,
  IsObject,
  IsNumber,
  IsBoolean,
  isArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { PRICE_TYPE, UNIT, SaleType } from '../../../enums';
import { PriceTierDto } from './price-tier.dto';

export class CreateProductDto {
  @IsObject()
  @IsOptional()
  name: any;
  @IsObject()
  @IsOptional()
  content: any;

  @IsObject()
  @IsOptional()
  parameter_title: any;
  @IsString()
  @IsOptional()
  parameter: string;

  @IsOptional()
  position: string;
  // @IsString()
  // @IsOptional()
  // views: string;
  @IsNumber()
  @IsOptional()
  count: number;

  @IsNumber()
  @IsOptional()
  sale_count: number;

  @IsNumber()
  @IsOptional()
  price: number;

  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => PriceTierDto)
  price_tiers?: PriceTierDto[];

  @IsBoolean()
  @IsOptional()
  use_price_tiers?: boolean;

  @IsNumber()
  @IsOptional()
  sale: number;

  @IsOptional()
  @IsEnum([1, 2, 3, 4])
  type: [1, 2, 3, 4];
  @IsOptional()
  @IsEnum(SaleType)
  sale_type: SaleType;
  @IsOptional()
  @IsEnum(PRICE_TYPE)
  price_type: PRICE_TYPE;
  @IsOptional()
  @IsEnum(UNIT)
  unit: UNIT;

  @IsOptional()
  images: string[];

  @IsOptional()
  is_active: string;

  @IsString()
  @IsOptional()
  menu: string;
  @IsString()
  @IsOptional()
  product: string;
  @IsString()
  @IsOptional()
  color: string;
  @IsArray()
  @IsOptional()
  tags: string;

  @IsString()
  @IsOptional()
  psic?: string;

  //! PRODUCT OPTION DATA
  @IsArray()
  @IsOptional()
  options: object[];
}
