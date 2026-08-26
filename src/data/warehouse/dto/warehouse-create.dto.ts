import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateWarehouseDto {
  @IsString()
  name: string;

  @IsString()
  address: string;

  @IsString()
  @IsOptional()
  additional_info: string;

  @IsString()
  contact_fullname: string;

  @IsString()
  contact_phone_number: string;

  @IsNumber()
  @IsOptional()
  latitude: number;

  @IsNumber()
  @IsOptional()
  longitude: number;

  @IsBoolean()
  @IsOptional()
  is_active: boolean;
}
