import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { ModelUser } from '../../../data';

@Schema({ collection: 'logger', timestamps: true })
export class ModelLogger {
  @Prop({ type: Object })
  data: {};
  @Prop({ type: String })
  method: string;
  @Prop({ type: String })
  url: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'user' })
  user: ModelUser;
}

export const ModelLoggerSchema = SchemaFactory.createForClass(ModelLogger);
