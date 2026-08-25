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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelCustomerCompanyStageSchema = exports.ModelCustomerCompanyStage = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const enums_1 = require("../../../enums");
let ModelCustomerCompanyStage = class ModelCustomerCompanyStage {
};
exports.ModelCustomerCompanyStage = ModelCustomerCompanyStage;
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: enums_1.CustomerCompanyStage, required: true }),
    __metadata("design:type", String)
], ModelCustomerCompanyStage.prototype, "stage", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: enums_1.CustomerCompanyStatus,
        default: enums_1.CustomerCompanyStatus.new,
    }),
    __metadata("design:type", String)
], ModelCustomerCompanyStage.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: null }),
    __metadata("design:type", String)
], ModelCustomerCompanyStage.prototype, "rejection_reason", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, default: null }),
    __metadata("design:type", Date)
], ModelCustomerCompanyStage.prototype, "updated_at", void 0);
exports.ModelCustomerCompanyStage = ModelCustomerCompanyStage = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], ModelCustomerCompanyStage);
exports.ModelCustomerCompanyStageSchema = mongoose_1.SchemaFactory.createForClass(ModelCustomerCompanyStage);
