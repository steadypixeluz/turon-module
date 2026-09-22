import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { ModelStore } from "../../store";
@Schema({ collection: "store-image", timestamps: true })
export class ModelStoreImage {
  @Prop()
  photo?: string;
  @Prop({ type: Object })
  image_data?: Object;
  @Prop()
  position: number;
  @Prop({ type: mongoose.Types.ObjectId, ref: "Store" })
  store: ModelStore;
  @Prop({ default: false })
  is_main?: boolean;
}

export const ModelStoreImageSchema =
  SchemaFactory.createForClass(ModelStoreImage);
