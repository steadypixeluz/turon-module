import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Lang } from "../../interfaces";
import { ModelStore } from "../../store";

@Schema({ collection: "store-video", timestamps: true })
export class ModelStoreVideo {
  @Prop()
  file?: string;
  @Prop()
  poster?: string;
  @Prop()
  link?: string;
  @Prop()
  iframe?: string;
  @Prop({ type: Object })
  name?: Lang;
  @Prop({ type: Object })
  file_data?: Object;
  @Prop()
  position: number;
  @Prop({ type: mongoose.Types.ObjectId, ref: "Store" })
  store: ModelStore;
  @Prop({ default: false })
  is_main?: boolean;
}

export const ModelStoreVideoSchema =
  SchemaFactory.createForClass(ModelStoreVideo);
