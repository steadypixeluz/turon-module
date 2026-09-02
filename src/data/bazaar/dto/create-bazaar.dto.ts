import { IsObject, IsOptional, IsString } from 'class-validator';
import { Lang } from '../../interfaces';

export class CreateBazaarDto {
  @IsString()
  @IsOptional()
  logo: string;

  @IsString()
  name: string;

  @IsObject()
  @IsOptional()
  description: Lang;

  @IsString()
  country: string;

  @IsObject()
  @IsOptional()
  address: Lang;
}
