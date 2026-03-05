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
exports.ModelSubProductSchema = exports.ModelSubProduct = exports.ModelProductSchema = exports.ModelProduct = exports.ModelProductInfoSchema = exports.ModelProductInfo = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const enums_1 = require("../../../enums");
const color_1 = require("../../color");
const country_1 = require("../../country");
const customer_company_1 = require("../../customer-company");
const menu_1 = require("../../menu");
const tag_1 = require("../../tag");
const variation_select_1 = require("../../variation-select");
const data_1 = require("../../../data");
let ModelProductInfo = class ModelProductInfo {
};
exports.ModelProductInfo = ModelProductInfo;
__decorate([
    (0, mongoose_1.Prop)({ unique: true }),
    __metadata("design:type", Number)
], ModelProductInfo.prototype, "uid", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], ModelProductInfo.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], ModelProductInfo.prototype, "content", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], ModelProductInfo.prototype, "short_content", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ModelProductInfo.prototype, "sale_count", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], ModelProductInfo.prototype, "variation_object", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], ModelProductInfo.prototype, "comment_count", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 5 }),
    __metadata("design:type", Number)
], ModelProductInfo.prototype, "rating", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'string', enum: enums_1.PRICE_TYPE }),
    __metadata("design:type", String)
], ModelProductInfo.prototype, "price_type", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ModelProductInfo.prototype, "min_unit", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ModelProductInfo.prototype, "weight", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ModelProductInfo.prototype, "box_width", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ModelProductInfo.prototype, "box_length", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ModelProductInfo.prototype, "box_height", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelProductInfo.prototype, "psic", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", String)
], ModelProductInfo.prototype, "vat_percent", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelProductInfo.prototype, "package_code", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelProductInfo.prototype, "status_description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'string', enum: enums_1.StatusType }),
    __metadata("design:type", String)
], ModelProductInfo.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'string', enum: enums_1.ProductType, default: enums_1.ProductType.retail }),
    __metadata("design:type", String)
], ModelProductInfo.prototype, "showcase", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", Number)
], ModelProductInfo.prototype, "position", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], ModelProductInfo.prototype, "views", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Array, default: [] }),
    __metadata("design:type", Array)
], ModelProductInfo.prototype, "images", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Menu' }),
    __metadata("design:type", menu_1.ModelMenu)
], ModelProductInfo.prototype, "menu", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: data_1.ModelBrand.name }),
    __metadata("design:type", data_1.ModelBrand)
], ModelProductInfo.prototype, "brand", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [mongoose_2.default.Schema.Types.ObjectId], ref: 'Tag' }),
    __metadata("design:type", tag_1.ModelTag)
], ModelProductInfo.prototype, "tags", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [mongoose_2.default.Schema.Types.ObjectId], ref: 'Color' }),
    __metadata("design:type", color_1.ModelColor)
], ModelProductInfo.prototype, "colors", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'country' }),
    __metadata("design:type", country_1.ModelCountry)
], ModelProductInfo.prototype, "country", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelProductInfo.prototype, "menu_uid", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'string', enum: ['external', 'internal'], default: 'internal' }),
    __metadata("design:type", String)
], ModelProductInfo.prototype, "delivery_origin_type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], ModelProductInfo.prototype, "is_active", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'customer_company' }),
    __metadata("design:type", customer_company_1.ModelCustomerCompany)
], ModelProductInfo.prototype, "customer_company", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], ModelProductInfo.prototype, "is_deleted", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], ModelProductInfo.prototype, "deleted_at", void 0);
exports.ModelProductInfo = ModelProductInfo = __decorate([
    (0, mongoose_1.Schema)({ collection: 'product-info', timestamps: true })
], ModelProductInfo);
exports.ModelProductInfoSchema = mongoose_1.SchemaFactory.createForClass(ModelProductInfo);
let ModelProduct = class ModelProduct {
};
exports.ModelProduct = ModelProduct;
__decorate([
    (0, mongoose_1.Prop)({ unique: true }),
    __metadata("design:type", Number)
], ModelProduct.prototype, "uid", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], ModelProduct.prototype, "images", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ModelProduct.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], ModelProduct.prototype, "sale_price", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], ModelProduct.prototype, "sale", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'string', enum: enums_1.SaleType }),
    __metadata("design:type", String)
], ModelProduct.prototype, "sale_type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], ModelProduct.prototype, "is_active", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Menu' }),
    __metadata("design:type", menu_1.ModelMenu)
], ModelProduct.prototype, "menu", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Color' }),
    __metadata("design:type", color_1.ModelColor)
], ModelProduct.prototype, "color", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'product_info' }),
    __metadata("design:type", ModelProductInfo)
], ModelProduct.prototype, "product_info", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'string', enum: enums_1.StatusType }),
    __metadata("design:type", String)
], ModelProduct.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'country' }),
    __metadata("design:type", country_1.ModelCountry)
], ModelProduct.prototype, "country", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], ModelProduct.prototype, "is_main", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], ModelProduct.prototype, "is_deleted", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], ModelProduct.prototype, "deleted_at", void 0);
exports.ModelProduct = ModelProduct = __decorate([
    (0, mongoose_1.Schema)({ collection: 'product', timestamps: true })
], ModelProduct);
exports.ModelProductSchema = mongoose_1.SchemaFactory.createForClass(ModelProduct);
let ModelSubProduct = class ModelSubProduct {
};
exports.ModelSubProduct = ModelSubProduct;
__decorate([
    (0, mongoose_1.Prop)({ unique: true }),
    __metadata("design:type", Number)
], ModelSubProduct.prototype, "uid", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], ModelSubProduct.prototype, "count", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], ModelSubProduct.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], ModelSubProduct.prototype, "sale", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], ModelSubProduct.prototype, "sale_price", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelSubProduct.prototype, "psic", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelSubProduct.prototype, "vat_percent", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelSubProduct.prototype, "package_code", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'string', enum: enums_1.SaleType }),
    __metadata("design:type", String)
], ModelSubProduct.prototype, "sale_type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], ModelSubProduct.prototype, "is_active", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ModelSubProduct.prototype, "weight", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ModelSubProduct.prototype, "box_width", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ModelSubProduct.prototype, "box_length", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ModelSubProduct.prototype, "box_height", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Product' }),
    __metadata("design:type", ModelProduct)
], ModelSubProduct.prototype, "product", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [mongoose_2.default.Schema.Types.ObjectId], ref: 'variations' }),
    __metadata("design:type", variation_select_1.ModelVariationSelect)
], ModelSubProduct.prototype, "variations", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'product_info' }),
    __metadata("design:type", ModelProductInfo)
], ModelSubProduct.prototype, "product_info", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], ModelSubProduct.prototype, "is_deleted", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], ModelSubProduct.prototype, "deleted_at", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], ModelSubProduct.prototype, "is_main", void 0);
exports.ModelSubProduct = ModelSubProduct = __decorate([
    (0, mongoose_1.Schema)({ collection: 'sub-product', timestamps: true })
], ModelSubProduct);
exports.ModelSubProductSchema = mongoose_1.SchemaFactory.createForClass(ModelSubProduct);
