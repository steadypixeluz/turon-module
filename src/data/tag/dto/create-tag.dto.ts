import {
  IsBoolean,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { Lang } from '../../interfaces';

export class CreateTagDto {
  @IsOptional()
  @IsObject()
  name: Lang;
  @IsOptional()
  @IsString()
  position: string;
  @IsOptional()
  @IsBoolean()
  is_active: boolean;
}
