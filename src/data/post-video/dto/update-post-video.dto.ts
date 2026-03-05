import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdatePostVideoDto {
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
