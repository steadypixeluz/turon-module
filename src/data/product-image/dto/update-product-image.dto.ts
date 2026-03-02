import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
export class UpdateProductImageDto {
  @IsOptional()
  @IsString()
  position: string;

  @IsOptional()
  @IsBoolean()
  is_main: boolean;
  photo?: string;
  image_data?: any;
}
