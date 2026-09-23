import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Lang } from "../../interfaces";
import { ModelProduct } from "../../product";
import { ProductType } from "../../../enums";
import { ModelStore } from "../../store";

@Schema({ collection: "store-collections", timestamps: true })
export class ModelStoreCollection {
  @Prop({ type: Object })
  title: Lang;
  @Prop({
    type: "string",
    enum: ["carousel", "hero", "circle", "overlay", "split", "solid"],
  })
  view_type: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "StoreCollection" })
  collection: ModelStoreCollection;
  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: "Product" })
  products: ModelProduct;
  @Prop()
  position: number;
  @Prop({ default: true })
  is_active?: boolean;
  @Prop({ type: "string", enum: ProductType, default: ProductType.retail })
  showcase: string;
  @Prop({ type: mongoose.Types.ObjectId, ref: "Store" })
  store: ModelStore;
}

export const ModelStoreCollectionSchema =
  SchemaFactory.createForClass(ModelStoreCollection);

ModelStoreCollectionSchema.index({
  is_active: 1,
  view_type: 1,
  position: 1,
  createdAt: -1,
});
ModelStoreCollectionSchema.index({ group: 1, position: 1, createdAt: -1 });
