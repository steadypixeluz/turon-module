import { IsOptional } from 'class-validator';

export class SendNewsletterDto {
  @IsOptional()
  groups?: [string];
  @IsOptional()
  message: string;
}
