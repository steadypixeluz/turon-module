import { IsString, IsEmail, IsOptional, IsNotEmpty } from 'class-validator';

export class ClientLoginDto {
  @IsString()
  @IsNotEmpty()
  phone_number: string;
  @IsString()
  @IsNotEmpty()
  password: string;
}
