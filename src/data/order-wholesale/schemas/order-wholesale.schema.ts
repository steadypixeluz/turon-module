import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { OrderWholesaleStatus } from '../../../enums';
import { ModelCountry } from '../../country';
import { ModelCustomers } from '../../customer';

@Schema({ collection: 'order-wholesale', timestamps: true })
export class ModelOrderWholesale {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'customers' })
  customer: ModelCustomers;

  @Prop()
  order_id: number;

  @Prop()
  description: string;

  @Prop()
  date: string;
  @Prop()
  carts: [string];
  @Prop()
  receiver_fullname: string;
  @Prop()
  receiver_phone_number: string;
  @Prop()
  company_name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'country' })
  country: ModelCountry;

  @Prop()
  sale_price: number;

  @Prop({
    type: 'string',
    enum: OrderWholesaleStatus,
    default: OrderWholesaleStatus.draft,
  })
  status: string;
}

export const ModelOrderWholesaleSchema =
  SchemaFactory.createForClass(ModelOrderWholesale);
