import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { ModelBuyCoin } from '../../buy-coin';
import { ModelCustomers } from '../../customer';
import { ModelSubProduct, ModelProductInfo } from '../../product';

@Schema({ collection: 'coin-order', timestamps: true })
export class ModelCoinOrder {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'coin_collection' })
  coin_collection: ModelBuyCoin;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'customer' })
  customer: ModelCustomers;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'customer' })
  purchase_customer: ModelCustomers;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'customer' })
  gift_customer: ModelCustomers;
  @Prop({
    type: [mongoose.Schema.Types.ObjectId],
    ref: ModelSubProduct.name,
  })
  sub_product: ModelSubProduct[];

  @Prop({
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'product_info',
  })
  product_info: ModelProductInfo[];
  @Prop()
  description: string;
  @Prop()
  coin_count: number;
  @Prop()
  gift_coins: number;
  @Prop()
  price: number;
  @Prop({ default: false })
  status?: boolean;
}

export const ModelCoinOrderSchema =
  SchemaFactory.createForClass(ModelCoinOrder);
