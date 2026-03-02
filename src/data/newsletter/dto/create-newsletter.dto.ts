import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateNewsletterDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  name_message: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  theme_message: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  status: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  type: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  message: string;
}
