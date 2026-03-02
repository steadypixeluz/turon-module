import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Lang } from '../../interfaces';
import { ModelMenu } from '../../menu';
import { ModelProduct } from '../../product';

@Schema({ collection: 'wholesale-slider-collections', timestamps: true })
export class ModelWholesaleSliderCollection {
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

export const ModelWholesaleSliderCollectionSchema = SchemaFactory.createForClass(
  ModelWholesaleSliderCollection,
);
