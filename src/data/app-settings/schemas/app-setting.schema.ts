import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Status } from '../../../enums';
import { Lang } from '../../interfaces';

@Schema({ collection: 'app-setting', timestamps: true })
export class ModelAppSetting {
  @Prop({ type: Object })
  head_title: Lang;
  @Prop({ type: Object })
  modal_title: Lang;
  @Prop({ type: Object })
  mobile_title: Lang;
  @Prop({ type: Object })
  modal_description: Lang;
  @Prop({ type: Object })
  mobile_description: Lang;
  @Prop({ type: Object })
  head_description: Lang;
  @Prop({ type: 'string', enum: Status, default: Status.on })
  site_status: string;
  @Prop({ type: 'string', enum: Status, default: Status.on })
  mobile_status: string;
  @Prop()
  head_image: string;
  @Prop()
  last_version: number;
  @Prop()
  min_version: number;
  @Prop()
  admin_logo: string;
  @Prop()
  admin_logo_mini: string;
  @Prop()
  keywords: string;
  @Prop()
  post_statistic_menu: string[];
  @Prop()
  additional_file: string;
  @Prop()
  additional_file2: string;
  @Prop()
  app_name: string;

  @Prop()
  telegram_group_id: string;

  @Prop({ default: true })
  test_mode: boolean;
}

export const ModelAppSettingSchema =
  SchemaFactory.createForClass(ModelAppSetting);
