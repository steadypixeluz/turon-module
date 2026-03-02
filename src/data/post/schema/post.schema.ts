import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Date } from 'mongoose';
import { ModelPostCategory } from './post-category.schema';
import { Lang } from '../../interfaces';
import { ModelMenu } from '../../menu';

@Schema({ collection: 'post', timestamps: true })
export class ModelPost {
  @Prop({ type: Object })
  title: Lang;
  @Prop({ type: Object })
  subtitle: Lang;
  @Prop({ type: Object })
  content: Lang;
  @Prop({ type: Date })
  pub_date: Date;
  @Prop({ default: null })
  position: number;
  @Prop()
  photo: string;
  @Prop({ default: true })
  is_active: boolean;
  @Prop({ default: false })
  is_send: boolean;
  @Prop({ default: false })
  on_slider: boolean;
  @Prop()
  group: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'menu' })
  menu: ModelMenu;
  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'category' })
  category: ModelPostCategory;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'post' })
  post: ModelPost;
  // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'user' })
  // user: ModelUser;
  // @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'person' })
  // persons: ModelPerson[];
  @Prop({ default: 0 })
  views: number;
  @Prop({ default: '' })
  main_image: string;
  // @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'tag' })
  // tags: ModelTag;
  @Prop()
  add_param_1: string;
  @Prop()
  add_param_2: string;
  @Prop()
  add_param_3: string;
  @Prop()
  add_param_4: string;
  @Prop()
  add_param_5: string;
  @Prop({ type: Object })
  add_param_object_1: Lang;
  @Prop({ type: Object })
  add_param_object_2: Lang;
  @Prop({ type: Object })
  add_param_object_3: Lang;
  @Prop({ type: Object })
  add_param_object_4: Lang;
  @Prop({ type: Object })
  add_param_object_5: Lang;
  @Prop({ default: false })
  is_deleted: boolean;
  @Prop()
  deleted_at: string;
}

export const ModelPostSchema = SchemaFactory.createForClass(ModelPost);
