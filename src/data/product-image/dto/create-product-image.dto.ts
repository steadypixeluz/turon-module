import { IsOptional, IsString } from 'class-validator';

export class CreateProductImageDto {
  @IsOptional()
  @IsString()
  position: string;
  @IsOptional()
  @IsString()
  product: string;
  @IsOptional()
  @IsString()
  is_main?: string;
}
