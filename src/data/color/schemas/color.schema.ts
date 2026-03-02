import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Lang } from '../../interfaces';

@Schema({ collection: 'color', timestamps: true })
export class ModelColor {
  @Prop({ type: Object })
  name: Lang;
  @Prop()
  color: string;
  @Prop({ default: true })
  is_active: boolean;
  @Prop({ default: false })
  is_deleted: boolean;
  @Prop()
  deleted_at: string;
}

export const ModelColorSchema = SchemaFactory.createForClass(ModelColor);
