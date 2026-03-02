import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class ClientGoogleRegistorDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  first_name: string;
  @IsString()
  @IsNotEmpty()
  last_name: string;

  @IsString()
  @IsOptional()
  fbToken: string;
  @IsString()
  @IsOptional()
  photo: string;
  @IsString()
  @IsOptional()
  referrer: string;
  @IsString()
  @IsOptional()
  device_data: string;
  language?: string;
}

export class ClientAppleRegistorDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsOptional()
  device_data: string;
  @IsString()
  @IsNotEmpty()
  apple_id: string;
  @IsString()
  @IsOptional()
  referrer: string;
  @IsString()
  @IsOptional()
  first_name: string;
  @IsString()
  @IsOptional()
  last_name: string;

  @IsString()
  @IsOptional()
  fbToken: string;
  language?: string;
}

export class ClientFacebookRegisterDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  first_name: string;
  @IsString()
  @IsNotEmpty()
  last_name: string;
  @IsString()
  @IsOptional()
  faceBookToken: string;
  @IsString()
  @IsOptional()
  fbToken: string;
  language?: string;
}

export class ClientRegisterDto {
  @IsString()
  @IsNotEmpty()
  password: string;

  password_length: number;

  @IsString()
  @IsNotEmpty()
  first_name: string;
  @IsString()
  @IsNotEmpty()
  last_name: string;

  @IsString()
  @IsNotEmpty()
  phone_number: string;
  @IsString()
  @IsOptional()
  referrer: string;
  @IsString()
  @IsEmail()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  fbToken: string;
  @IsString()
  @IsOptional()
  country: string;
 @IsString()
  @IsOptional()
  device_data: string;

  @IsOptional()
  language?: string;
}

export class ClientForgotPasswordDto {
  @IsString()
  @IsNotEmpty()
  password: string;
  @IsString()
  @IsNotEmpty()
  phone_number: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsOptional()
  language?: string;
}
