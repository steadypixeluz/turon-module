import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ collection: "brand", timestamps: true })
export class ModelBrand {
  @Prop()
  photo?: string;
  @Prop()
  title: string;
  @Prop()
  position: number;
  @Prop({ default: true })
  is_active?: boolean;
  @Prop({ default: false })
  is_deleted: boolean;
  @Prop({ default: null })
  deleted_at: string;
}

export const ModelParetnerSchema = SchemaFactory.createForClass(ModelBrand);
