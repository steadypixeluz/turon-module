import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateWarehouseDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  address: string;

  @IsString()
  @IsOptional()
  additional_info: string;

  @IsString()
  @IsOptional()
  contact_fullname: string;

  @IsString()
  @IsOptional()
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
