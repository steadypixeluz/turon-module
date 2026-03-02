import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Lang } from '../../interfaces';
import { ModelMenu } from '../../menu';
import { ModelProduct } from '../../product';

@Schema({ collection: 'wholesale-collections', timestamps: true })
export class ModelWholesaleCollection {
  @Prop({ type: Object })
  title: Lang;
  @Prop({ type: 'string', enum: ['slider', 'column'], default: 'slider' })
  view_type: string;
  @Prop({ type: 'string', enum: ['feed', 'category'], default: 'feed' })
  type: string;
  @Prop({ type: 'string', enum: ['mobile', 'site'], default: 'site' })
  device: string;
  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Menu' })
  menu: ModelMenu;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Promo' })
  promo: ModelWholesaleCollection;
  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Product' })
  products: ModelProduct;
  @Prop()
  position: number;
  @Prop({ default: true })
  is_active?: boolean;
}

export const ModelWholesaleCollectionSchema = SchemaFactory.createForClass(
  ModelWholesaleCollection,
);

