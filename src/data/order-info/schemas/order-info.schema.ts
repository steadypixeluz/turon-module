import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { OrderInfoStatus } from '../../../enums';
import { ModelAddress } from '../../address';
import { ModelCustomers } from '../../customer';
import { ModelPickupPoint } from '../../pickup-point';

@Schema({ collection: 'order-info', timestamps: true })
export class ModelOrderInfo {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'customers' })
  customer: ModelCustomers;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'pickup_point' })
  pickup_point: ModelPickupPoint;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'address' })
  address: ModelAddress;
  @Prop()
  address_name: string;
  @Prop()
  sale_price: number;
  @Prop()
  coin_count: number;
  @Prop()
  payable:number
  @Prop()
  share:number
  @Prop()
  carts: [string];
  @Prop()
  order_id: number;
  @Prop({
    type: 'string',
    enum: ['cash', 'payme', 'click', 'coin'],
    default: 'cash',
  })
  payment_type: string;
  @Prop()
  receiver_fullname: string;
  @Prop()
  receiver_phone_number: string;
  @Prop()
  date: string;
  @Prop()
  delivery_price: number;
  @Prop()
  delivery_pickup_point_price: number;
  @Prop({
    type: 'string',
    enum: ['pickup-point', 'courier'],
    default: 'pickup-point',
  })
  delivery_type: string;
  @Prop({
    type: 'string',
    enum: OrderInfoStatus,
    default: OrderInfoStatus.draft,
  })
  status: string;
  @Prop()
  order_info_id: string;
  @Prop({ default: false })
  is_deleted: boolean;
}

export const ModelOrderInfoSchema =
  SchemaFactory.createForClass(ModelOrderInfo);
