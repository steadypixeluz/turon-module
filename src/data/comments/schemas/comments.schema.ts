import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { CommentStatus } from '../../../enums';
import { ModelCustomers } from '../../customer';
import { ModelOrderProduct } from '../../order';
import { ModelProductInfo } from '../../product';

@Schema({ collection: 'comments', timestamps: true })
export class ModelComments {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'customer' })
  customer: ModelCustomers;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'product-info' })
  product_info: ModelProductInfo;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'order-product' })
  order_product: ModelOrderProduct;

  @Prop()
  advantages: string;
  @Prop()
  flaws: string;
  @Prop()
  note: string;

  @Prop()
  rating: number;

  @Prop()
  images: string[];

  @Prop()
  status: CommentStatus.proccess;

  @Prop({ default: false })
  is_anonim: boolean;
}

export const ModelCommentsSchema = SchemaFactory.createForClass(ModelComments);
