import { IsOptional, IsNumber, IsString } from 'class-validator';
import { Types } from 'mongoose';

export class UpdateAddressDto {
  @IsOptional()
  @IsNumber()
  lat!: number;

  @IsOptional()
  @IsNumber()
  long!: number;

  @IsOptional()
  @IsString()
  title!: string;

  @IsOptional()
  @IsString()
  apartment?: string;

  @IsOptional()
  @IsString()
  corridor?: string;

  @IsOptional()
  @IsString()
  floor?: string;

  @IsOptional()
  @IsString()
  intercom_code?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  country?: string;
  @IsOptional()
  @IsString()
  region?: string;
  @IsOptional()
  @IsString()
  district?: string;
}
