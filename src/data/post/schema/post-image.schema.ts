import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { ModelPost } from './post.schema';

@Schema({ collection: 'post-image', timestamps: true })
export class ModelPostImage {
  @Prop()
  photo?: string;
  @Prop({ type: Object })
  image_data?: Object;
  @Prop()
  position: number;
  @Prop({ type: mongoose.Types.ObjectId, ref: 'post' })
  post: ModelPost;
  @Prop({ default: false })
  is_main?: boolean;
}

export const ModelPostImageSchema =
  SchemaFactory.createForClass(ModelPostImage);
