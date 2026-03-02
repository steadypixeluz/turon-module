import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { ModelMenu } from '../../menu/schemas/menu.schema';
import { ModelOption } from '../../option';
@Schema({ collection: 'menu-option', timestamps: true })
export class ModelMenuOption {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Option' })
  option: ModelOption;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Menu' })
  menu: ModelMenu;
  @Prop({ default: false })
  on_filter: boolean;
}

export const ModelMenuOptionSchema = SchemaFactory.createForClass(ModelMenuOption);
