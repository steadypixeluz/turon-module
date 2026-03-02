import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateCartDto {
  @IsOptional()
  @IsNumber()
  count: number;
  @IsOptional()
  @IsString()
  customer: string;
  @IsOptional()
  @IsString()
  sub_product: string;
  @IsOptional()
  @IsString()
  product_info: string;
}
