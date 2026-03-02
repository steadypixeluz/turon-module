import {
  IsBoolean,
  IsNotEmpty,
  IsObject,
  IsEnum,
  IsOptional,
} from 'class-validator';
import { Lang } from '../../interfaces';
import { OptionType } from '../../../enums';

export class CreateOptionDto {
  @IsNotEmpty()
  @IsObject()
  name: Lang;
  @IsOptional()
  @IsEnum(OptionType)
  type: OptionType;
  @IsOptional()
  @IsBoolean()
  is_active: boolean;
}
