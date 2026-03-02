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
exports.ModelOrderInfoSchema = exports.ModelOrderInfo = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const enums_1 = require("../../../enums");
const address_1 = require("../../address");
const customer_1 = require("../../customer");
const pickup_point_1 = require("../../pickup-point");
let ModelOrderInfo = class ModelOrderInfo {
};
exports.ModelOrderInfo = ModelOrderInfo;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'customers' }),
    __metadata("design:type", customer_1.ModelCustomers)
], ModelOrderInfo.prototype, "customer", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'pickup_point' }),
    __metadata("design:type", pickup_point_1.ModelPickupPoint)
], ModelOrderInfo.prototype, "pickup_point", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'address' }),
    __metadata("design:type", address_1.ModelAddress)
], ModelOrderInfo.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelOrderInfo.prototype, "address_name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ModelOrderInfo.prototype, "sale_price", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ModelOrderInfo.prototype, "coin_count", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ModelOrderInfo.prototype, "payable", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ModelOrderInfo.prototype, "share", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], ModelOrderInfo.prototype, "carts", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ModelOrderInfo.prototype, "order_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: 'string',
        enum: ['cash', 'payme', 'click', 'coin'],
        default: 'cash',
    }),
    __metadata("design:type", String)
], ModelOrderInfo.prototype, "payment_type", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelOrderInfo.prototype, "receiver_fullname", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelOrderInfo.prototype, "receiver_phone_number", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelOrderInfo.prototype, "date", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ModelOrderInfo.prototype, "delivery_price", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ModelOrderInfo.prototype, "delivery_pickup_point_price", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: 'string',
        enum: ['pickup-point', 'courier'],
        default: 'pickup-point',
    }),
    __metadata("design:type", String)
], ModelOrderInfo.prototype, "delivery_type", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: 'string',
        enum: enums_1.OrderInfoStatus,
        default: enums_1.OrderInfoStatus.draft,
    }),
    __metadata("design:type", String)
], ModelOrderInfo.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelOrderInfo.prototype, "order_info_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], ModelOrderInfo.prototype, "is_deleted", void 0);
exports.ModelOrderInfo = ModelOrderInfo = __decorate([
    (0, mongoose_1.Schema)({ collection: 'order-info', timestamps: true })
], ModelOrderInfo);
exports.ModelOrderInfoSchema = mongoose_1.SchemaFactory.createForClass(ModelOrderInfo);
