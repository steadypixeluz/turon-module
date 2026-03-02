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
exports.ModelOrderProductSchema = exports.ModelOrderProduct = exports.ModelOrderSchema = exports.ModelOrder = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const enums_1 = require("../../../enums");
const customer_1 = require("../../customer");
const customer_company_1 = require("../../customer-company");
const order_info_1 = require("../../order-info");
const order_wholesale_1 = require("../../order-wholesale");
const product_1 = require("../../product");
let ModelOrder = class ModelOrder {
};
exports.ModelOrder = ModelOrder;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'customers' }),
    __metadata("design:type", customer_1.ModelCustomers)
], ModelOrder.prototype, "customer", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'order_info' }),
    __metadata("design:type", order_info_1.ModelOrderInfo)
], ModelOrder.prototype, "order_info_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelOrder.prototype, "order_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelOrder.prototype, "origin_type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], ModelOrder.prototype, "emu_order_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ModelOrder.prototype, "emu_order_status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], ModelOrder.prototype, "delivery_home_days", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], ModelOrder.prototype, "delivery_office_days", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: 'string',
        enum: enums_1.OrderStatus,
        default: enums_1.OrderStatus.draft,
    }),
    __metadata("design:type", String)
], ModelOrder.prototype, "status", void 0);
exports.ModelOrder = ModelOrder = __decorate([
    (0, mongoose_1.Schema)({ collection: 'orders', timestamps: true })
], ModelOrder);
exports.ModelOrderSchema = mongoose_1.SchemaFactory.createForClass(ModelOrder);
let ModelOrderProduct = class ModelOrderProduct {
};
exports.ModelOrderProduct = ModelOrderProduct;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'customers' }),
    __metadata("design:type", customer_1.ModelCustomers)
], ModelOrderProduct.prototype, "customer", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'sub-product' }),
    __metadata("design:type", product_1.ModelSubProduct)
], ModelOrderProduct.prototype, "sub_product", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'customers-company' }),
    __metadata("design:type", customer_company_1.ModelCustomerCompany)
], ModelOrderProduct.prototype, "customer_company", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], ModelOrderProduct.prototype, "product_name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: "retail" }),
    __metadata("design:type", String)
], ModelOrderProduct.prototype, "showcase", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelOrderProduct.prototype, "product_image", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'order' }),
    __metadata("design:type", ModelOrder)
], ModelOrderProduct.prototype, "order", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'order-wholesale' }),
    __metadata("design:type", order_wholesale_1.ModelOrderWholesale)
], ModelOrderProduct.prototype, "order_wholesale", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ModelOrderProduct.prototype, "sale_price", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ModelOrderProduct.prototype, "count", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], ModelOrderProduct.prototype, "is_deleted", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], ModelOrderProduct.prototype, "is_comment", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: 'string',
        enum: enums_1.OrderProductStatus,
        default: enums_1.OrderProductStatus.draft,
    }),
    __metadata("design:type", String)
], ModelOrderProduct.prototype, "status", void 0);
exports.ModelOrderProduct = ModelOrderProduct = __decorate([
    (0, mongoose_1.Schema)({ collection: 'order-product', timestamps: true })
], ModelOrderProduct);
exports.ModelOrderProductSchema = mongoose_1.SchemaFactory.createForClass(ModelOrderProduct);
