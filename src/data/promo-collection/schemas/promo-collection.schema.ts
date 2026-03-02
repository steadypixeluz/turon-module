import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Lang } from '../../interfaces';
import { ModelMenu } from '../..//menu';
import { ModelProduct } from '../..//product';

@Schema({ collection: 'promo-collections', timestamps: true })
export class ModelPromoCollection {
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
  @Prop({ default: true })
  is_active?: boolean;
}

export const ModelPromoCollectionSchema =
  SchemaFactory.createForClass(ModelPromoCollection);

