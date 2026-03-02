import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateProductVideoDto {
  @IsOptional()
  @IsString()
  position: string;

  @IsOptional()
  @IsBoolean()
  is_main: boolean;
  @IsOptional()
  @IsString()
  name: string;
  @IsOptional()
  @IsString()
  poster: string;
  @IsOptional()
  @IsString()
  file: string;
  @IsOptional()
  file_data?: Object;
}
