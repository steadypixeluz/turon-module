import {
  IsArray,
  IsOptional,
  IsString,
  IsEnum,
  IsObject,
  IsNumber,
  isArray,
} from 'class-validator';
import { PRICE_TYPE, UNIT,SaleType } from '../../../enums';

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

  //! PRODUCT OPTION DATA
  @IsArray()
  @IsOptional()
  options: object[];
}
