import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Lang } from "../../interfaces";
import { ModelProduct } from "../../product";
import { ProductType } from "../../../enums";
import { ModelMenu } from "../../../data/menu";
import { ModelCountry } from "../../../data/country/schemas/country.schema";

@Schema({ collection: "country-collections", timestamps: true })
export class ModelCountryCollection {
  @Prop({ type: Object })
  title: Lang;
  @Prop({
    type: "string",
    enum: ["carousel", "hero", "about","circle", "overlay", "split", "solid"],
  })
  view_type: string;
  @Prop({ type: "string", enum: ["collection", "product"] })
  type: string;
  @Prop()
  title_view:boolean
   @Prop()
  photo?: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "CountryCollection" })
  collection: ModelCountryCollection;
  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: "Product" })
  products: ModelProduct;
    @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: "Menu" })
  menu: ModelMenu;
  @Prop()
  position: number;
  @Prop({ default: true })
  is_active?: boolean;
  @Prop({ type: "string", enum: ProductType, default: ProductType.retail })
  showcase: string;
  @Prop({ type: mongoose.Types.ObjectId, ref: "country" })
  country: ModelCountry;
}

export const ModelCountryCollectionSchema =
  SchemaFactory.createForClass(ModelCountryCollection);

ModelCountryCollectionSchema.index({
  is_active: 1,
  view_type: 1,
  position: 1,
  createdAt: -1,
});
