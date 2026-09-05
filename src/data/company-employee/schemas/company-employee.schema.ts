import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { ModelCustomers } from '../../customer/schemas/customer.schema';
import { ModelCustomerCompany } from '../../customer-company/schemas/customer-company.schema';
import { ModelStore } from '../../store/schemas/store.schema';

@Schema({ collection: 'company-employee', timestamps: true })
export class ModelCompanyEmployee {
  @Prop({ type: mongoose.Types.ObjectId, ref: 'Customer', required: true })
  customer: ModelCustomers;

  @Prop({ type: mongoose.Types.ObjectId, ref: 'CustomerCompany', required: true })
  customer_company: ModelCustomerCompany;

  @Prop({ type: mongoose.Types.ObjectId, ref: 'Store', required: true })
  store: ModelStore;

  @Prop({ required: true })
  role: string;

  @Prop({ default: false })
  is_deleted: boolean;

  @Prop({ default: null })
  deleted_at: string;
}

export const ModelCompanyEmployeeSchema = SchemaFactory.createForClass(ModelCompanyEmployee);
