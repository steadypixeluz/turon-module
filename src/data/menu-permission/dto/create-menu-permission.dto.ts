import { IsObject, IsOptional, IsString } from 'class-validator';

export class CreateMenuPermissionDto {
  @IsString()
  @IsOptional()
  key: string;
  @IsString()
  @IsOptional()
  group: string;
  @IsString()
  @IsOptional()
  post_group: string;
  @IsObject()
  @IsOptional()
  name: string;
  @IsOptional()
  is_required: boolean;
}
