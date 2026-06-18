import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Types } from 'mongoose';

@Schema({ collection: 'chats', timestamps: true })
export class ModelChat {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'entity_type',
    index: true,
  })
  entity_id: string;

  @Prop({
    type: String,
    required: true,
    enum: ['cargos', 'vehicle'],
    index: true,
  })
  entity_type: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
  sellerId: Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
  buyerId: Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId })
  lastMessage: Types.ObjectId;
}

export const ModelChatSchema = SchemaFactory.createForClass(ModelChat);
ModelChatSchema.index(
  { entity_id: 1, sellerId: 1, buyerId: 1 },
  { unique: true },
);
