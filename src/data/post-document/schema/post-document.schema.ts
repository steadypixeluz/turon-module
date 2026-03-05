import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Lang } from '../../../data/interfaces';
import { ModelPost } from '../../../data/post/schema/post.schema';

@Schema({ collection: 'post-document', timestamps: true })
export class ModelPostDocument {
  @Prop()
  file?: string;
  @Prop()
  poster?: string;
  @Prop({ type: Object })
  name?: Lang;
  @Prop({ type: Object })
  file_data?: Object;
  @Prop()
  link?: string;
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

export const ModelPostDocumentSchema =
  SchemaFactory.createForClass(ModelPostDocument);
