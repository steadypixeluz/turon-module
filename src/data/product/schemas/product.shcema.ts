import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { PRICE_TYPE, ProductType, StatusType, SaleType } from '../../../enums';
import { ModelColor } from '../../color';
import { ModelCountry } from '../../country';
import { ModelCustomerCompany } from '../../customer-company';
import { Lang } from '../../interfaces';
import { ModelMenu } from '../../menu';
import { ModelTag } from '../../tag';
import { ModelVariationSelect } from '../../variation-select';
import { ModelBrand } from '../../../data';
@Schema({ collection: 'product-info', timestamps: true })
export class ModelProductInfo {
  @Prop({ unique: true })
  uid: number;
  @Prop({ type: Object })
  name: Lang;
  @Prop({ type: Object })
  content: Lang;
  @Prop({ type: Object })
  short_content: Lang;
  @Prop()
  sale_count: number;
  @Prop({ type: Object })
  variation_object: {};
  @Prop({ default: 0 })
  comment_count: number;
  @Prop({ default: 5 })
  rating: number;
  @Prop({ type: 'string', enum: PRICE_TYPE })
  price_type: string;
  @Prop()
  min_unit: number;
  @Prop()
  weight: number;
  @Prop()
  box_width: number;
  @Prop()
  box_length: number;
  @Prop()
  box_height: number;
  @Prop()
  psic: string;
  @Prop({default:0})
  vat_percent: string;
  @Prop()
  package_code: string;
  @Prop()
  status_description: string;
  @Prop({ type: 'string', enum: StatusType })
  status: string;
  @Prop({ type: 'string', enum: ProductType, default: ProductType.retail })
  showcase: string;
  @Prop({ default: null })
  position: number;
  @Prop({ default: 0 })
  views: number;
  @Prop({ type: Array, default: [] })
  images: string[];
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Menu' })
  menu: ModelMenu;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Brand' })
  brand: ModelBrand;
  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Tag' })
  tags: ModelTag;
  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Color' })
  colors: ModelColor;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'country' })
  country: ModelCountry;
  @Prop()
  menu_uid: string;
  @Prop({ type: 'string', enum: ['external', 'internal'], default: 'internal' })
  delivery_origin_type: string;
  @Prop({ default: true })
  is_active: boolean;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'customer_company' })
  customer_company: ModelCustomerCompany;
  @Prop({ default: false })
  is_deleted: boolean;
  @Prop({ default: null })
  deleted_at: string;
}

export const ModelProductInfoSchema =
  SchemaFactory.createForClass(ModelProductInfo);

@Schema({ collection: 'product', timestamps: true })
export class ModelProduct {
  @Prop({ unique: true })
  uid: number;
  @Prop()
  images: string[];
  @Prop()
  price: number;
  @Prop({ default: 0 })
  sale_price: number;
  @Prop({ default: 0 })
  sale: number;
  @Prop({ type: 'string', enum: SaleType })
  sale_type: string;
  @Prop({ default: true })
  is_active: boolean;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Menu' })
  menu: ModelMenu;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Color' })
  color: ModelColor;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'product_info' })
  product_info: ModelProductInfo;
  @Prop({ type: 'string', enum: StatusType })
  status: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'country' })
  country: ModelCountry;

  @Prop({ default: false })
  is_main?: boolean;
  @Prop({ default: false })
  is_deleted: boolean;
  @Prop({ default: null })
  deleted_at: string;
}

export const ModelProductSchema = SchemaFactory.createForClass(ModelProduct);

@Schema({ collection: 'sub-product', timestamps: true })
export class ModelSubProduct {
  @Prop({ unique: true })
  uid: number;
  @Prop({ default: 0 })
  count: number;
  @Prop({ default: 0 })
  price: number;
  @Prop({ default: 0 })
  sale: number;
  @Prop({ default: 0 })
  sale_price: number;
  @Prop()
  psic: string;
  @Prop()
  vat_percent: string;
  @Prop()
  package_code: string;
  @Prop({ type: 'string', enum: SaleType })
  sale_type: string;
  @Prop({ default: true })
  is_active: boolean;
  @Prop()
  weight: number;
  @Prop()
  box_width: number;
  @Prop()
  box_length: number;
  @Prop()
  box_height: number;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product' })
  product: ModelProduct;
  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'variations' })
  variations: ModelVariationSelect;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'product_info' })
  product_info: ModelProductInfo;
  @Prop({ default: false })
  is_deleted: boolean;
  @Prop({ default: null })
  deleted_at: string;
  @Prop({ default: false })
  is_main?: boolean;
}

export const ModelSubProductSchema =
  SchemaFactory.createForClass(ModelSubProduct);
