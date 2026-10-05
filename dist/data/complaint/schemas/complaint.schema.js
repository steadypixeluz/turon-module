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
exports.ModelComplaintSchema = exports.ModelComplaint = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const customer_1 = require("../../customer");
const product_1 = require("../../product");
const complaint_status_enum_1 = require("../../../enums/complaint.status.enum");
const order_1 = require("../../../data/order");
let ModelComplaint = class ModelComplaint {
};
exports.ModelComplaint = ModelComplaint;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: "customers" }),
    __metadata("design:type", customer_1.ModelCustomers)
], ModelComplaint.prototype, "seller", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: "customers" }),
    __metadata("design:type", customer_1.ModelCustomers)
], ModelComplaint.prototype, "buyer", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: "order" }),
    __metadata("design:type", order_1.ModelOrder)
], ModelComplaint.prototype, "order", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: "sub-product" }),
    __metadata("design:type", product_1.ModelSubProduct)
], ModelComplaint.prototype, "sub_product", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: "product_info" }),
    __metadata("design:type", product_1.ModelProductInfo)
], ModelComplaint.prototype, "product_info", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Array, default: [] }),
    __metadata("design:type", Array)
], ModelComplaint.prototype, "images", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelComplaint.prototype, "seller_description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelComplaint.prototype, "buyer_description", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: "string",
        enum: complaint_status_enum_1.ComplaintStatus,
        default: complaint_status_enum_1.ComplaintStatus.new,
    }),
    __metadata("design:type", String)
], ModelComplaint.prototype, "status", void 0);
exports.ModelComplaint = ModelComplaint = __decorate([
    (0, mongoose_1.Schema)({ collection: "complaint", timestamps: true })
], ModelComplaint);
exports.ModelComplaintSchema = mongoose_1.SchemaFactory.createForClass(ModelComplaint);
