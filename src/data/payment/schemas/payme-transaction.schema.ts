import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ClickTransactionState } from '../../../enums';
export enum PaymeStatus {
  paid = 2,
  cancel = -1,
  perform_cancel = -2,
  new = 1,
}
export enum Payment {
  coin = 2,
  product = 1,
}
// 1 = oplata kutulyapti  2 = oplata tolandi  -1 = oplata otmen boldi  -2 = oplata tolangandan kegin otmen boldi

@Schema({ collection: 'payme-transaction', timestamps: true })
export class ModelPayme {
  @Prop({ default: false })
  check: boolean;
  @Prop()
  order_uid?: string;
  @Prop()
  amount?: number;
  @Prop()
  transaction_id: string;
  @Prop({ type: 'number', enum: PaymeStatus, default: PaymeStatus.new })
  status: number;
  @Prop({ type: 'number', enum: Payment })
  payment: number;

  @Prop()
  time: string;
  @Prop({ default: false })
  is_deleted: boolean;
  @Prop()
  deleted_at: string;
  @Prop({ default: 0 })
  cancel_time: number;
  @Prop({ default: 0 })
  create_time: number;
  @Prop({ default: 0 })
  perform_time: number;
  @Prop({ default: null })
  reason: number;
}

export const ModelPaymeSchema = SchemaFactory.createForClass(ModelPayme);

@Schema({ collection: 'click-transaction', timestamps: true })
export class ClickTransaction {
  @Prop({ default: false })
  check: boolean;
  @Prop()
  id: string;
  @Prop()
  click_paydoc_id: string;
  @Prop()
  order_info_id: string;
  @Prop({ type: 'number', enum: Payment })
  payment: number;
  @Prop({ type: Number, enum: ClickTransactionState })
  state: number;

  @Prop()
  amount: number;

  @Prop({ default: () => Date.now() })
  create_time: number;

  @Prop({ default: 0 })
  perform_time: number;

  @Prop({ default: 0 })
  cancel_time: number;

  @Prop({ default: null })
  reason: number;

  @Prop()
  prepare_id: string;
}

export const ClickTransactionSchema =
  SchemaFactory.createForClass(ClickTransaction);
