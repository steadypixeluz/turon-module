import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { OptionType } from '../../../enums';
import { Lang } from '../../interfaces';

@Schema({ collection: 'option', timestamps: true })
export class ModelOption {
  @Prop({ type: Object })
  name: Lang;
  @Prop({ type: 'string', enum: OptionType })
  type: string;
  @Prop({ default: true })
  is_active: boolean;
  @Prop({ default: false })
  is_deleted: boolean;
  @Prop()
  deleted_at: string;
}

export const ModelOptionSchema = SchemaFactory.createForClass(ModelOption);
