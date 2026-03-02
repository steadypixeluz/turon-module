import {
  IsArray,
  IsOptional,
  IsObject,
  IsString,
  IsNumber,
  IsBoolean,
} from 'class-validator';

export class GenerateProductDto {
  @IsArray()
  @IsOptional()
  colors: object[];
  @IsArray()
  @IsOptional()
  parameter: string[];
  @IsObject()
  @IsOptional()
  parameter_title: any;
  @IsString()
  @IsOptional()
  product: string;
  @IsNumber()
  @IsOptional()
  price: number;

  @IsNumber()
  @IsOptional()
  count: number;
  @IsNumber()
  @IsOptional()
  sale: number;
  @IsBoolean()
  @IsOptional()
  has_active: boolean;
}
