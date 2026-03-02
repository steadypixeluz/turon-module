import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Lang } from '../../interfaces';
import { ModelMenu } from '../../menu';

@Schema({ collection: 'post-category', timestamps: true })
export class ModelPostCategory {
  @Prop({ type: Object })
  name: Lang;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Menu' })
  menu: ModelMenu;
  @Prop({ default: false })
  is_deleted: boolean;
  @Prop({ default: null })
  position: number;
  @Prop()
  deleted_at: string;
}

export const ModelPostCategorySchema = SchemaFactory.createForClass(ModelPostCategory);
