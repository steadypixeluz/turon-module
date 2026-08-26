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
exports.ModelWarehouseSchema = exports.ModelWarehouse = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const customer_company_schema_1 = require("../../customer-company/schemas/customer-company.schema");
let ModelWarehouse = class ModelWarehouse {
};
exports.ModelWarehouse = ModelWarehouse;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], ModelWarehouse.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], ModelWarehouse.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelWarehouse.prototype, "additional_info", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], ModelWarehouse.prototype, "contact_fullname", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], ModelWarehouse.prototype, "contact_phone_number", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: null }),
    __metadata("design:type", Number)
], ModelWarehouse.prototype, "latitude", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: null }),
    __metadata("design:type", Number)
], ModelWarehouse.prototype, "longitude", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], ModelWarehouse.prototype, "is_active", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Types.ObjectId, ref: "CustomerCompany", required: true }),
    __metadata("design:type", customer_company_schema_1.ModelCustomerCompany)
], ModelWarehouse.prototype, "customer_company", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], ModelWarehouse.prototype, "is_deleted", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], ModelWarehouse.prototype, "deleted_at", void 0);
exports.ModelWarehouse = ModelWarehouse = __decorate([
    (0, mongoose_1.Schema)({ collection: "warehouses", timestamps: true })
], ModelWarehouse);
exports.ModelWarehouseSchema = mongoose_1.SchemaFactory.createForClass(ModelWarehouse);
