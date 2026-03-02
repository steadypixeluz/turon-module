import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { MenuType, MenuDataType } from '../../../enums';
import { Lang } from '../../interfaces';

@Schema({ collection: 'menu', timestamps: true })
export class ModelMenu {
  _id: string;

  @Prop({ unique: true })
  uid: number;

  @Prop({ type: Object })
  title: Lang;
  @Prop({ type: Object })
  subtitle: Lang;
  @Prop({ type: Object })
  content: Lang;
  @Prop({ default: 1 })
  position: number;
  @Prop()
  link: string;
  @Prop()
  svg_icon: string;
  @Prop({ type: 'string', enum: MenuType })
  type: string;
  @Prop({ type: [String], enum: MenuDataType })
  datatype: MenuDataType[];
  @Prop()
  group: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Menu' })
  menu: ModelMenu;
  @Prop()
  photo: string;
  @Prop({ default: true })
  on_header: boolean;
  @Prop({ default: false })
  on_footer: boolean;
    @Prop({ default: false })
  on_slider: boolean;
  @Prop({ default: true })
  is_active: boolean;
  @Prop({ default: true })
  is_category: boolean;
  @Prop({ default: false })
  is_admin: boolean;
  @Prop({ default: false })
  has_category: boolean;
  @Prop({ default: false })
  is_deleted: boolean;
}

export const ModelMenuSchema = SchemaFactory.createForClass(ModelMenu);
