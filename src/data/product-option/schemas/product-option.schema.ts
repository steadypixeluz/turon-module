import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { ModelProductInfo } from '../../product';
import { Lang } from '../../interfaces';
import { ModelOption } from '../../option';
import { ModelOptionSelect } from '../../option-select';

@Schema({ collection: 'product-option', timestamps: true })
export class ModelProductOption {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'product' })
  product_info: ModelProductInfo;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'option' })
  option: ModelOption;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'option-select' })
  option_select: ModelOptionSelect;
  @Prop()
  value?: string;
  @Prop({ type: Object })
  value_name: Lang;
}

export const ModelProductOptionSchema =
  SchemaFactory.createForClass(ModelProductOption);
