import { IsObject, IsOptional, IsString } from 'class-validator';
import { Lang } from '../../interfaces';

export class CreateBazaarBlockDto {
  @IsObject()
  name: Lang;

  @IsObject()
  @IsOptional()
  description: Lang;

  @IsString()
  bazaar: string;

  @IsOptional()
  is_active: string;
}
