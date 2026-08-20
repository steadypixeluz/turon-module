import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export interface PsicLangText {
  uz?: string;
  ru?: string;
}

@Schema({ collection: 'psics', timestamps: true })
export class ModelPsic {
  @Prop({ type: String, required: true, unique: true, trim: true })
  psic: string;

  @Prop({ type: Object })
  psicName: PsicLangText;

  @Prop({ type: Object })
  groupName: PsicLangText;

  @Prop({ type: Object })
  className: PsicLangText;

  @Prop({ type: Object })
  positionName: PsicLangText;

  @Prop({ type: Object })
  subPositionName: PsicLangText;

  @Prop({ type: Boolean, default: true })
  isValidForCategory: boolean;

  @Prop({ type: Boolean, default: false })
  isVatRelief: boolean;

  @Prop({ type: Boolean, default: true })
  is_active: boolean;

  @Prop({ type: Boolean, default: false })
  is_deleted: boolean;

  @Prop({ type: String, default: null })
  deleted_at: string;
}

export const ModelPsicSchema = SchemaFactory.createForClass(ModelPsic);

ModelPsicSchema.index({ psic: 1 }, { unique: true });
ModelPsicSchema.index({ is_deleted: 1, createdAt: -1 });
ModelPsicSchema.index({ is_deleted: 1, is_active: 1, createdAt: -1 });
