"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelCompanyEmployeeSchema = exports.ModelCompanyEmployee = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const customer_schema_1 = require("../../customer/schemas/customer.schema");
let ModelCompanyEmployee = class ModelCompanyEmployee {
};
exports.ModelCompanyEmployee = ModelCompanyEmployee;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Customer', required: true }),
    __metadata("design:type", customer_schema_1.ModelCustomers)
], ModelCompanyEmployee.prototype, "customer", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [mongoose_2.default.Schema.Types.ObjectId], ref: 'Store', default: [] }),
    __metadata("design:type", Array)
], ModelCompanyEmployee.prototype, "store", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], ModelCompanyEmployee.prototype, "role", void 0);
exports.ModelCompanyEmployee = ModelCompanyEmployee = __decorate([
    (0, mongoose_1.Schema)({ collection: 'company-employee', timestamps: true })
], ModelCompanyEmployee);
exports.ModelCompanyEmployeeSchema = mongoose_1.SchemaFactory.createForClass(ModelCompanyEmployee);
