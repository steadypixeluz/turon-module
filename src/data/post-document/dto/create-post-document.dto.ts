import { IsOptional, IsString } from 'class-validator';

export class CreatePostDocumentDto {
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
  @IsString()
  link?: string;
  @IsOptional()
  file_data?: Object;
  @IsOptional()
  @IsString()
  position: string;
  @IsOptional()
  @IsString()
  post: string;
}
