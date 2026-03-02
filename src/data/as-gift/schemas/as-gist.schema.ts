import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { ModelCustomers } from '../../customer';
import { ModelProductInfo, ModelSubProduct } from '../../product';

@Schema({ collection: 'as-gift', timestamps: true })
export class ModelAsGift{
  @Prop({ default: false })
  is_deleted: boolean;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'customer' })
  customer: ModelCustomers;
@Prop({ type: mongoose.Schema.Types.ObjectId, ref: ModelSubProduct.name })
  sub_product: ModelSubProduct;
   @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'product_info' })
    product_info: ModelProductInfo;
}

export const ModelAsGiftSchema = SchemaFactory.createForClass(ModelAsGift);
