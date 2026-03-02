import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Lang } from '../../interfaces';
import { ModelMenu } from '../../menu';
import { ModelProduct } from '../../product';

@Schema({ collection: 'retail-slider-collections', timestamps: true })
export class ModelRetailSliderCollection {
  @Prop({ type: Object })
  title: Lang;
  @Prop({ type: 'string', enum: ['feed', 'category'], default: 'feed' })
  type: string;
  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Menu' })
  menu: ModelMenu;
  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Product' })
  products: ModelProduct;
  @Prop()
  position: number;
  @Prop()
  photo: string;
  @Prop({ default: true })
  is_active?: boolean;
}

export const ModelRetailSliderCollectionSchema = SchemaFactory.createForClass(
  ModelRetailSliderCollection,
);
