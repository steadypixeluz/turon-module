import { IsBoolean, IsObject, IsOptional, IsString } from 'class-validator';
import { Lang } from '../../interfaces';


export class CreateTranslationDto {
  @IsOptional()
  @IsObject()
  value: Lang;
  @IsString()
  @IsOptional()
  key?: string;
  @IsBoolean()
  @IsOptional()
  is_active?: boolean;
}
