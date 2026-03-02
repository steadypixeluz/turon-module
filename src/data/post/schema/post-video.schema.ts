import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Lang } from '../../interfaces';
import { ModelPost } from './post.schema';

@Schema({ collection: 'post-video', timestamps: true })
export class ModelPostVideo {
  @Prop()
  file?: string;
  @Prop()
  poster?: string;
  @Prop()
  link?: string;
  @Prop({ type: Object })
  name?: Lang;
  @Prop({ type: Object })
  file_data?: Object;
  @Prop()
  position: number;
  @Prop({ type: mongoose.Types.ObjectId, ref: 'post' })
  post: ModelPost;
  @Prop({ default: false })
  is_main?: boolean;
  @Prop({ default: false })
  is_deleted: boolean;
  @Prop()
  deleted_at: string;
}

export const ModelPostVideoSchema =
  SchemaFactory.createForClass(ModelPostVideo);