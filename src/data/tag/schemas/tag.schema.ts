import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Lang } from '../../interfaces';
@Schema({ collection: 'tags', timestamps: true })
export class ModelTag {
  @Prop({ type: Object })
  name: Lang;
  @Prop({ default: true })
  is_active: boolean;
  @Prop({ default: false })
  is_deleted: boolean;
}

export const ModelTagSchema = SchemaFactory.createForClass(ModelTag);
