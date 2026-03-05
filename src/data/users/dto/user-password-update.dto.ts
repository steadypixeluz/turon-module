import { IsOptional, IsString } from 'class-validator';
export class UserPasswordUpdateDto {
  @IsString()
  password?: string;
  @IsString()
  @IsOptional()
  old_password: string;
}
