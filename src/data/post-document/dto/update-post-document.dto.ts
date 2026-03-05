import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdatePostDocumentDto {
  @IsOptional()
  @IsString()
  file?: string;
  @IsOptional()
  @IsString()
  poster?: string;
  @IsOptional()
  @IsString()
  name?: string;
  @IsOptional()
  file_data?: Object;
  @IsOptional()
  @IsString()
  position: string;
  @IsOptional()
  @IsString()
  post: string;
  @IsOptional()
  @IsBoolean()
  is_main: string;
}
