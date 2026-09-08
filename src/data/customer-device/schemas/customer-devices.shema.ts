import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { ModelCustomers } from '../../customer';

@Schema({ collection: 'customer-devices', timestamps: true })
export class ModelCustomerDevice {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'customers',
    index: true,
    sparse: true,
  })
  customer: ModelCustomers;

  @Prop()
  device: string;

  @Prop()
  lang: string;

  @Prop()
  type: string;

  @Prop({ index: true, sparse: true })
  fbToken: string;

  @Prop({ default: true })
  push_notification: boolean;
}

export const ModelCustomerDeviceSchema = SchemaFactory.createForClass(ModelCustomerDevice);

ModelCustomerDeviceSchema.index({ location: '2dsphere' });
