import {
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { Lang } from '../../interfaces';

export class CreateDistrictDto {
  @IsNotEmpty()
  @IsObject()
  name: Lang;
  @IsOptional()
  @IsString()
  position: string;
  @IsOptional()
  @IsString()
  code: string;
  @IsOptional()
  @IsString()
  region_id: string;
}
