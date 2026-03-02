import {
  IsBoolean,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { Lang } from '../../interfaces';

export class CreateColorDto {
  @IsNotEmpty()
  @IsObject()
  name: Lang;
  @IsOptional()
  @IsString()
  color: string;
  @IsOptional()
  @IsBoolean()
  is_active: boolean;
}
