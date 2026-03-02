import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateNewsletterDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  name_message: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  theme_message: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  type: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  message: string;
}
