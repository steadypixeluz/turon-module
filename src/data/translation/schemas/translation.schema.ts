import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Lang } from '../../interfaces';
@Schema({ collection: 'translation', timestamps: true })
export class ModelTranslation {
  @Prop({ type: Object })
  value: Lang;
  @Prop({ default: '', unique: true })
  key?: string;
  @Prop({ default: true })
  is_active?: boolean;
  @Prop({ default: false })
  is_deleted?: boolean;
}

export const ModelTranslationSchema =
  SchemaFactory.createForClass(ModelTranslation);
