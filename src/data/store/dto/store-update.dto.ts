import { IsOptional, IsString } from 'class-validator';

export class UpdateStoreDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  slug: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  logo: string;

  @IsString()
  @IsOptional()
  banner: string;
}
