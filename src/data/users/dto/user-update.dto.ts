import { IsOptional, IsString } from 'class-validator';
export class UserUpdateDto {
  @IsString()
  @IsOptional()
  id?: string;

  @IsString()
  @IsOptional()
  login?: string;
}
