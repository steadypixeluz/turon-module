import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  @IsNotEmpty()
  order_product: string;

  @IsString()
  @IsOptional()
  advantages: string;
  @IsString()
  @IsOptional()
  flaws: string;
  @IsString()
  @IsOptional()
  note: string;

  @IsString()
  @IsOptional()
  is_anonim: string;

  @IsString()
  @IsNotEmpty({ message: 'Rating не должен быть пустым' })
  rating: string;

  images:any

  @IsString()
  @IsOptional()
  customer: string;
}
