import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { CoinHistoryType, CoinHistoryInReason } from '../../../enums';
import { ModelCustomers } from '../../customer';
import { ModelSubProduct, ModelProductInfo } from '../../product';

@Schema({ collection: 'coin-history', timestamps: true })
export class ModelCoinHistory {
  @Prop()
  coin?: number;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'customer' })
  customer: ModelCustomers;
  @Prop({
    type: String,
    enum: CoinHistoryType,
    required: true,
  })
  type: CoinHistoryType;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'customer' })
  purchase_customer: ModelCustomers; // OLIB BERGAN CUSTOMER
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'customer' })
  gift_customer: ModelCustomers; // CUSTOMER SOVGA QILGAN USER
  @Prop({
    type: String,
    enum: CoinHistoryInReason,
  })
  reason: CoinHistoryInReason;
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
}

export const ModelCoinHistorySchema =
  SchemaFactory.createForClass(ModelCoinHistory);
