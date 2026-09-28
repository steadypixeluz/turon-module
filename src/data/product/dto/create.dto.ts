import { IsArray, IsBoolean, IsEnum, IsMongoId, IsNumber, IsOptional, IsString, Min, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { SaleType } from '../../../enums';
import { PriceTierDto } from './price-tier.dto';

export class CreateSubProductDto {
  @IsNumber()
  uid: number;

  @IsNumber()
  @Min(0)
  count: number;

  @IsNumber()
  @Min(0)
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
  @Min(0)
  sale: number;

  @IsEnum(SaleType)
  sale_type: string;

  @IsBoolean()
  @IsOptional()
  is_active?: boolean;

  @IsMongoId()
  product: string;

  @IsMongoId({ each: true })
  @IsOptional()
  variations?: string[];

  @IsMongoId()
  @IsOptional()
  product_info?: string;

  @IsMongoId()
  @IsOptional()
  psic?: string;

  @IsBoolean()
  @IsOptional()
  is_deleted?: boolean;

  @IsBoolean()
  @IsOptional()
  is_main?: boolean;

  status: string
}
