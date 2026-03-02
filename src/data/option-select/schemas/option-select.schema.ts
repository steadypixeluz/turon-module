import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Lang } from '../../interfaces';
import { ModelOption } from '../../option/schemas/option.schema';
@Schema({ collection: 'option-select', timestamps: true })
export class ModelOptionSelect {
  @Prop({ type: Object })
  name: Lang;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Option' })
  option: ModelOption;
  @Prop({ default: true })
  is_active: boolean;
  @Prop({ default: false })
  is_deleted: boolean;
  @Prop()
  deleted_at: string;
}

export const ModelOptionSelectSchema =
  SchemaFactory.createForClass(ModelOptionSelect);
