import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { ModelCustomers } from '../../customer';

@Schema({ collection: 'notificetions', timestamps: true })
export class ModelNotifications {
  @Prop()
  title: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'customers' })
  customer: ModelCustomers;
  @Prop()
  content: string;
  @Prop({ type: 'string' })
  type: string;
  @Prop({ default: false })
  is_read: boolean;
}

export const ModelNotificationsSchema =
  SchemaFactory.createForClass(ModelNotifications);
