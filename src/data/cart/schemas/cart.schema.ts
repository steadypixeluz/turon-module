import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { ModelCustomers } from '../../customer';
import { ModelProductInfo, ModelSubProduct } from '../../product';
import { ProductType } from '../../../enums';

@Schema({ collection: 'cart', timestamps: true })
export class ModelCart {
  @Prop()
  count: number;
  @Prop({ default: false })
  is_deleted: boolean;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'customer' })
  customer: ModelCustomers;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: ModelSubProduct.name })
  sub_product: ModelSubProduct;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'product_info' })
  product_info: ModelProductInfo;
  @Prop()
  parent_product: string;
  @Prop({ type: 'string', enum: ProductType, default: ProductType.retail })
  showcase: string;
}

export const ModelCartSchema = SchemaFactory.createForClass(ModelCart);
