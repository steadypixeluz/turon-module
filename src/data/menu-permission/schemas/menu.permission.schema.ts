import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Lang } from '../../interfaces';

@Schema({ collection: 'menu-permission', timestamps: true })
export class ModelMenuPermission {
  @Prop({ type: Object })
  name: Lang;
  @Prop()
  key: string;
  @Prop({ default: false })
  is_required: boolean;
  @Prop()
  group: string;
  @Prop()
  post_group: string;
}

export const ModelMenuPermissionSchema =
  SchemaFactory.createForClass(ModelMenuPermission);
