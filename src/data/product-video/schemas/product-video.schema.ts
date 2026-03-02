import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Lang } from '../../interfaces';
import { ModelProduct } from '../../product/schemas/product.shcema';

@Schema({ collection: 'product-video', timestamps: true })
export class ModelProductVideo {
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
  @Prop({ type: mongoose.Types.ObjectId, ref: 'Product' })
  product: ModelProduct;
  @Prop({ default: false })
  is_main?: boolean;
}

export const ModelProductVideoSchema =
  SchemaFactory.createForClass(ModelProductVideo);
