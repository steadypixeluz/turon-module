import { IsString, IsEmail, IsOptional } from 'class-validator';

export class ClientGoogleLoginDto {
  @IsString()
  @IsEmail()
  email: string;
  @IsString()
  @IsOptional()
  fbToken: string;
}

export class ClientLoginDto {
  @IsString()
  phone_number: string;
  @IsString()
  email: string;
  @IsString()
  password: string;
}
