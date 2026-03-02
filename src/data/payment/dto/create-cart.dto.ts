import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCardDto {
  @IsNotEmpty()
  @IsString()
  card_number: string;
  @IsNotEmpty()
  @IsString()
  card_expire: string;
}
