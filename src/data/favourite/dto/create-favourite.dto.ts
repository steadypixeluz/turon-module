import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class CreateFavouriteDto {
  @IsOptional()
  @IsString()
  customer: string;
  @IsNotEmpty()
  @IsString()
  product: string;
}
