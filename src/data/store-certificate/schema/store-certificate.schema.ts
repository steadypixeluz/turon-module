import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Lang } from "../../interfaces";
import { ModelStore } from "../../store";

@Schema({ collection: "store-certificate", timestamps: true })
export class ModelStoreCertificate {
  @Prop()
  file?: string;
  @Prop()
  photo?: string;
  @Prop({ type: Object })
  name?: Lang;
  @Prop({ type: Object })
  description?: Lang;
  @Prop()
  position: number;
  @Prop({ type: mongoose.Types.ObjectId, ref: "Store" })
  store: ModelStore;
}

export const ModelStoreCertificateSchema = SchemaFactory.createForClass(
  ModelStoreCertificate,
);
