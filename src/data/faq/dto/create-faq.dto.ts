import {
  IsBoolean,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { Lang } from '../../interfaces';


export class CreateFaqDto {
  @IsOptional()
  @IsObject()
  question: Lang;
  @IsOptional()
  @IsObject()
  answer: Lang;
  @IsOptional()
  @IsString()
  position: string;
  @IsOptional()
  @IsBoolean()
  is_active: string;
  @IsOptional()
  @IsString()
  category: string;
}
export class UpdateFaqDto {
  @IsOptional()
  @IsObject()
  question: Lang;
  @IsOptional()
  @IsObject()
  answer: Lang;
  @IsOptional()
  @IsString()
  position: string;
  @IsOptional()
  @IsBoolean()
  is_active: string;
  @IsOptional()
  @IsString()
  category: string;
}
