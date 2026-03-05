import { IsBoolean, IsEnum, IsMongoId, IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { SaleType } from '../../../enums';

export class CreateSubProductDto {
  @IsNumber()
  uid: number;

  @IsNumber()
  @Min(0)
  count: number;

  @IsNumber()
  @Min(0)
  price: number;

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

  @IsBoolean()
  @IsOptional()
  is_deleted?: boolean;

  @IsBoolean()
  @IsOptional()
  is_main?: boolean;

  status:string
}
