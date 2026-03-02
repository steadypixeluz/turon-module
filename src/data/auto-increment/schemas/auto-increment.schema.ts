import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'auto-increment' })
export class AutoIncrement extends Document {
  @Prop({ required: true, unique: true })
  model_name: string; // имя счётчика, например 'user'

  @Prop({ required: true })
  seq: number;
}

export const AutoIncrementSchema = SchemaFactory.createForClass(AutoIncrement);
