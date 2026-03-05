import { IsOptional, IsString } from 'class-validator';

export class CreatePostImageDto {
  @IsOptional()
  @IsString()
  position: string;
  @IsOptional()
  @IsString()
  post: string;
  @IsOptional()
  @IsString()
  is_main?: string;

  photo?: string;
  image_data?: string;
  
}
