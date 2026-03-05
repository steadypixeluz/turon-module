import { IsObject, IsOptional, IsString } from 'class-validator';
import { Lang } from '../../../data';

export class CreatePostCategoryDto {
  @IsObject()
  @IsOptional()
  name: Lang;
  @IsString()
  @IsOptional()
  menu: string;
  @IsString()
  @IsOptional()
  position: string;
}
