import { IsObject, IsOptional, IsString } from 'class-validator';
import { Lang } from '../../interfaces';

export class CreateBazaarDto {
  @IsString()
  @IsOptional()
  logo: string;

  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  country: string;

  @IsString()
  @IsOptional()
  color: string;
  @IsString()
  @IsOptional()
  latitude: string;
  @IsString()
  @IsOptional()
  longitude: string;

  @IsOptional()
  is_active: string;

  @IsString()
  @IsOptional()
  address: string;
}
