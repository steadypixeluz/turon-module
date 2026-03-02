import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { NotificationType } from '../../../enums';

export class CreateNotificationDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  title: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  user: string;

  @ApiProperty()
  @IsOptional()
  status: boolean;

  @ApiProperty()
  @IsOptional()
  @IsString()
  type: NotificationType;

  @ApiProperty()
  @IsOptional()
  @IsString()
  content: string;
}
