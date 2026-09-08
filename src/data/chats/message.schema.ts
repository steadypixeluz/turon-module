import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { ModelChat } from "./chat.schemas";
import { Lang } from "../interfaces";
@Schema({ _id: false })
export class MessageProductSnapshot {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "product_info" })
  product_info: mongoose.Schema.Types.ObjectId;
  @Prop({ type: Object })
  name: Lang;
  @Prop({ default: null })
  image: string;
}
export const MessageProductSnapshotSchema = SchemaFactory.createForClass(
  MessageProductSnapshot,
);

@Schema({ timestamps: true })
export class ModelMessage {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Chat", required: true })
  chatId: ModelChat;
  @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
  senderId: string; // Customer ID
  @Prop({ enum: ["text", "image", "multiple", "audio", "product"], default: "text" })
  type: string;
  @Prop({ default: "" })
  content: string;
  @Prop()
  images?: string[];
  @Prop()
  audios?: string[];
  @Prop()
  uuid?: string;
  @Prop({ default: false })
  isRead: boolean;
  @Prop({ type: Date, default: null })
  readAt: Date;
  @Prop({ type: MessageProductSnapshotSchema, default: null })
  product?: MessageProductSnapshot;
}

export const ModelMessageSchema = SchemaFactory.createForClass(ModelMessage);
