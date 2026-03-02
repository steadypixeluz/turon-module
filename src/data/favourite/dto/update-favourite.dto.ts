import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class UpdateFavouriteDto {
  @IsOptional()
  @IsString()
  client: string;
  @IsNotEmpty()
  @IsString()
  product: string;
}
