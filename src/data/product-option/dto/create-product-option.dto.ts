import { IsObject, IsOptional, IsString } from 'class-validator';

export class CreateProductOptionDto {
  @IsOptional()
  @IsString()
  option: string;
  @IsOptional()
  @IsString()
  product: string;
  @IsOptional()
  @IsString()
  option_select: string;

  @IsObject()
  @IsOptional()
  value_name: string;

  @IsString()
  @IsOptional()
  value: string;
}
