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
exports.ModelAsGiftSchema = exports.ModelAsGift = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const customer_1 = require("../../customer");
const product_1 = require("../../product");
let ModelAsGift = class ModelAsGift {
};
exports.ModelAsGift = ModelAsGift;
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], ModelAsGift.prototype, "is_deleted", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'customer' }),
    __metadata("design:type", customer_1.ModelCustomers)
], ModelAsGift.prototype, "customer", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: product_1.ModelSubProduct.name }),
    __metadata("design:type", product_1.ModelSubProduct)
], ModelAsGift.prototype, "sub_product", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'product_info' }),
    __metadata("design:type", product_1.ModelProductInfo)
], ModelAsGift.prototype, "product_info", void 0);
exports.ModelAsGift = ModelAsGift = __decorate([
    (0, mongoose_1.Schema)({ collection: 'as-gift', timestamps: true })
], ModelAsGift);
exports.ModelAsGiftSchema = mongoose_1.SchemaFactory.createForClass(ModelAsGift);
