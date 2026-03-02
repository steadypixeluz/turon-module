import { IsArray, IsEnum, IsOptional, IsString } from 'class-validator';
import { Status } from '../../../enums';

export class CreateAppSettingDto {
  @IsString()
  @IsOptional()
  head_title?: string;
  @IsString()
  @IsOptional()
  modal_title?: string;
  @IsString()
  @IsOptional()
  modal_description?: string;
  @IsOptional()
  @IsString()
  head_description?: string;
  @IsEnum(Status)
  @IsOptional()
  site_status?: string;
  @IsString()
  @IsOptional()
  head_image?: string;
  @IsString()
  @IsOptional()
  admin_logo?: string;
  @IsString()
  @IsOptional()
  admin_logo_mini?: string;
  @IsString()
  @IsOptional()
  keywords?: string;
  @IsString()
  @IsOptional()
  test_mode?: string;
  @IsString()
  @IsOptional()
  app_name?: string;
  @IsArray()
  @IsOptional()
  post_statistic_menu?: [string];
  @IsString()
  @IsOptional()
  additional_file?: string;
  @IsString()
  @IsOptional()
  telegram_bot_id?: string;

  @IsString()
  @IsOptional()
  additional_file2?: string;

  _id?: string;
}
