import { IsOptional, IsString } from 'class-validator';

export class CreatePostVideoDto {
  @IsOptional()
  @IsString()
  file?: string;
  @IsOptional()
  @IsString()
  link?: string;
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
}
