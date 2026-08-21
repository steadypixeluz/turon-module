import {
  IsNotEmpty,
  IsString,
} from 'class-validator';
export class AuthLoginDto {
  @IsString()
  @IsNotEmpty()
  phone_number: string;
  @IsString()
  @IsNotEmpty()
  password: string;
}
