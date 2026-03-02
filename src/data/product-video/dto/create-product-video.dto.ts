import { IsOptional, IsString } from 'class-validator';

export class CreateProductVideoDto {
  @IsOptional()
  @IsString()
  file?: string;
  @IsOptional()
  @IsString()
  link?: string;
  @IsOptional()
  @IsString()
  iframe?: string;
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
  product: string;
}
