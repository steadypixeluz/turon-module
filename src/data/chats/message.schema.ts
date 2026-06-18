import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { ModelChat } from './chat.schemas';

@Schema({ timestamps: true })
export class ModelMessage {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Chat', required: true })
  chatId: ModelChat;
  @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
  senderId: string; // Customer ID
  @Prop({ enum: ['text', 'image', 'multiple'], default: 'text' })
  type: string;
  @Prop({ default: '' })
  content: string;
  @Prop()
  images?: string[];
  @Prop()
  uuid?: string;
  @Prop({ default: false })
  isRead: boolean;
  @Prop({ type: Date, default: null })
  readAt: Date;
}

export const ModelMessageSchema = SchemaFactory.createForClass(ModelMessage);
