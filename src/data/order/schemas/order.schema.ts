import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { OrderStatus, OrderProductStatus } from '../../../enums';
import { ModelCustomers } from '../../customer';
import { ModelCustomerCompany } from '../../customer-company';
import { Lang } from '../../interfaces';
import { ModelOrderInfo } from '../../order-info';
import { ModelOrderWholesale } from '../../order-wholesale';
import { ModelSubProduct } from '../../product';

@Schema({ collection: 'orders', timestamps: true })
export class ModelOrder {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'customers' })
  customer: ModelCustomers;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'order_info' })
  order_info_id: ModelOrderInfo;
  @Prop()
  order_id: string;
   @Prop()
  origin_type:string
  @Prop({ type: Object })
  emu_order_id: {};
  @Prop()
  emu_order_status:number;
  @Prop({ type: Object })
  delivery_home_days: {};
  @Prop({ type: Object })
  delivery_office_days: {};
  @Prop({
    type: 'string',
    enum: OrderStatus,
    default: OrderStatus.draft,
  })
  status: string;
}

export const ModelOrderSchema = SchemaFactory.createForClass(ModelOrder);

@Schema({ collection: 'order-product', timestamps: true })
export class ModelOrderProduct {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'customers' })
  customer: ModelCustomers;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'sub-product' })
  sub_product: ModelSubProduct;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'customers-company' })
  customer_company: ModelCustomerCompany;
  @Prop({ type: Object })
  product_name: Lang;
  @Prop({ type: String, default: "retail" })
  showcase: string;
  @Prop()
  product_image: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'order' })
  order: ModelOrder;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'order-wholesale' })
  order_wholesale: ModelOrderWholesale;

  @Prop()
  sale_price: number;
  @Prop()
  count: number;
  @Prop({ default: false })
  is_deleted: boolean;
  @Prop({ default: false })
  is_comment: boolean;

  @Prop({
    type: 'string',
    enum: OrderProductStatus,
    default: OrderProductStatus.draft,
  })
  status: string;
}
export const ModelOrderProductSchema =
  SchemaFactory.createForClass(ModelOrderProduct);
