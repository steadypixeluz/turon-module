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
exports.ModelStoreBazaarAssignmentSchema = exports.ModelStoreBazaarAssignment = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const bazaar_schema_1 = require("../../bazaar/schemas/bazaar.schema");
const bazaar_block_schema_1 = require("../../bazaar-block/schemas/bazaar-block.schema");
const store_schema_1 = require("../../store/schemas/store.schema");
const customer_company_schema_1 = require("../../customer-company/schemas/customer-company.schema");
const enums_1 = require("../../../enums");
let ModelStoreBazaarAssignment = class ModelStoreBazaarAssignment {
};
exports.ModelStoreBazaarAssignment = ModelStoreBazaarAssignment;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Types.ObjectId, ref: 'Bazaar', required: true }),
    __metadata("design:type", bazaar_schema_1.ModelBazaar)
], ModelStoreBazaarAssignment.prototype, "bazaar", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Types.ObjectId, ref: 'BazaarBlock', required: true }),
    __metadata("design:type", bazaar_block_schema_1.ModelBazaarBlock)
], ModelStoreBazaarAssignment.prototype, "bazaar_block", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Types.ObjectId, ref: 'Store', required: true }),
    __metadata("design:type", store_schema_1.ModelStore)
], ModelStoreBazaarAssignment.prototype, "store", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Types.ObjectId, ref: 'CustomerCompany', required: true }),
    __metadata("design:type", customer_company_schema_1.ModelCustomerCompany)
], ModelStoreBazaarAssignment.prototype, "customer_company", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: enums_1.StoreBazaarAssignmentStatus,
        default: enums_1.StoreBazaarAssignmentStatus.new,
    }),
    __metadata("design:type", String)
], ModelStoreBazaarAssignment.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: null }),
    __metadata("design:type", String)
], ModelStoreBazaarAssignment.prototype, "rejection_reason", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], ModelStoreBazaarAssignment.prototype, "is_deleted", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], ModelStoreBazaarAssignment.prototype, "deleted_at", void 0);
exports.ModelStoreBazaarAssignment = ModelStoreBazaarAssignment = __decorate([
    (0, mongoose_1.Schema)({ collection: 'store-bazaar-assignment', timestamps: true })
], ModelStoreBazaarAssignment);
exports.ModelStoreBazaarAssignmentSchema = mongoose_1.SchemaFactory.createForClass(ModelStoreBazaarAssignment);
