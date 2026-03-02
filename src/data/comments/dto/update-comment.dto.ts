import { IsOptional, IsString } from 'class-validator';

export class UpdateCommentDto {
  @IsString()
  @IsOptional()
  product: string;

  @IsString()
  @IsOptional()
  text: string;
}
