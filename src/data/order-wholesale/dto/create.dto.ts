import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateOrderWholesaleDto {
  @IsNotEmpty()
  @IsArray()
  carts: [];
  @IsOptional()
  @IsString()
  receiver_fullname: string;
  @IsOptional()
  @IsString()
  receiver_phone_number: string;
  @IsOptional()
  @IsString()
  company_name: string;
  @IsOptional()
  @IsString()
  country: string;
  @IsOptional()
  sale_price: string;
}
