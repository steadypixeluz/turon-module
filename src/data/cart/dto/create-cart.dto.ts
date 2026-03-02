import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCartDto {
  @IsNotEmpty()
  @IsNumber()
  count: number;
  @IsOptional()
  @IsString()
  customer: string;
  @IsOptional()
  @IsString()
  product_info: string;
  @IsNotEmpty()
  @IsString()
  sub_product: string;
}
