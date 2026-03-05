import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { ModelMenu, ModelVariation } from '../../../data';
@Schema({ collection: 'menu-variation', timestamps: true })
export class ModelMenuVariation {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'variation' })
  variation: ModelVariation;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Menu' })
  menu: ModelMenu;
  @Prop({ default: false })
  on_filter: boolean;
}

export const ModelMenuVariationSchema =
  SchemaFactory.createForClass(ModelMenuVariation);
