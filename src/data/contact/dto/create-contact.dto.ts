import { IsArray, IsOptional, IsString } from 'class-validator';
import { Address, PhoneAndEmail, Social, Work } from '../../interfaces';
export class CreateContactDto {
  @IsArray()
  @IsOptional()
  phone_number: PhoneAndEmail[];
  @IsArray()
  @IsOptional()
  email: PhoneAndEmail[];
  @IsOptional()
  @IsArray()
  social: Social[];
  @IsOptional()
  @IsArray()
  address: Address[];
  @IsOptional()
  @IsArray()
  work_time: Work[];
  @IsOptional()
  @IsString()
  telegram_bot: string;
  @IsOptional()
  @IsString()
  map: boolean;
}
