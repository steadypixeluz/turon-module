import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { ModelProduct } from '../../product';

@Schema({ collection: 'product-image', timestamps: true })
export class ModelProductImage {
  @Prop()
  photo?: string;
  @Prop({ type: Object })
  image_data?: Object;
  @Prop()
  position: number;
  @Prop({ type: mongoose.Types.ObjectId, ref: 'Product' })
  product: ModelProduct;
  @Prop({ default: false })
  is_main?: boolean;
}

export const ModelProductImageSchema =
  SchemaFactory.createForClass(ModelProductImage);
