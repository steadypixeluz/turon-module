import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'filestorage', timestamps: true })
export class ModelFileStorage {
  @Prop({ type: Object })
  file: object;
  @Prop({ type: String, default: null })
  entity_id: string;
  @Prop({ default: false })
  is_deleted: boolean;
  @Prop({ default: null })
  deleted_at: string;
}

export const ModelFileStorageSchema =
  SchemaFactory.createForClass(ModelFileStorage);
