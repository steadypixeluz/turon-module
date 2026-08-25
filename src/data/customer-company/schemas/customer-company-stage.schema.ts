import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { CustomerCompanyStage, CustomerCompanyStatus } from "../../../enums";

@Schema({ _id: false })
export class ModelCustomerCompanyStage {
  @Prop({ type: String, enum: CustomerCompanyStage, required: true })
  stage: string;

  @Prop({
    type: String,
    enum: CustomerCompanyStatus,
    default: CustomerCompanyStatus.new,
  })
  status: string;

  @Prop({ type: String, default: null })
  rejection_reason: string;

  @Prop({ type: Date, default: null })
  updated_at: Date;
}

export const ModelCustomerCompanyStageSchema = SchemaFactory.createForClass(
  ModelCustomerCompanyStage,
);
