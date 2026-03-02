import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { Lang } from '../../interfaces';


export class CreateFaqCategoryDto {
  @IsNotEmpty()
  @IsObject()
  name: Lang;
  @IsOptional()
  @IsString()
  position: string;
  @IsOptional()
  @IsBoolean()
  is_active: boolean;
}
export class UpdateFaqCategoryDto {
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
