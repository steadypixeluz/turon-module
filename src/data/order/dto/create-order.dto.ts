import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsArray()
  carts: [];
  @IsOptional()
  @IsString()
  payment_type: string;
  @IsOptional()
  @IsString()
  delivery_type: string;
  @IsOptional()
  @IsString()
  address: string;
    @IsOptional()
  @IsString()
  pickup_point: string;
}
