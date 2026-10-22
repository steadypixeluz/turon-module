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
exports.ModelBrandImageSchema = exports.ModelBrandImage = exports.ModelBrandTypeSchema = exports.ModelBrandType = exports.ModelParetnerSchema = exports.ModelBrand = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const country_1 = require("src/data/country");
let ModelBrand = class ModelBrand {
};
exports.ModelBrand = ModelBrand;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelBrand.prototype, "photo", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelBrand.prototype, "logo", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelBrand.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], ModelBrand.prototype, "subtitle", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], ModelBrand.prototype, "about", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: "type", index: true }),
    __metadata("design:type", ModelBrandType)
], ModelBrand.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], ModelBrand.prototype, "official_brand", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: "country" }),
    __metadata("design:type", country_1.ModelCountry)
], ModelBrand.prototype, "country", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelBrand.prototype, "founded", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelBrand.prototype, "website", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ModelBrand.prototype, "position", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], ModelBrand.prototype, "is_active", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], ModelBrand.prototype, "is_deleted", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], ModelBrand.prototype, "deleted_at", void 0);
exports.ModelBrand = ModelBrand = __decorate([
    (0, mongoose_1.Schema)({ collection: "brand", timestamps: true })
], ModelBrand);
exports.ModelParetnerSchema = mongoose_1.SchemaFactory.createForClass(ModelBrand);
let ModelBrandType = class ModelBrandType {
};
exports.ModelBrandType = ModelBrandType;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelBrandType.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ModelBrandType.prototype, "position", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], ModelBrandType.prototype, "is_active", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelBrandType.prototype, "color", void 0);
exports.ModelBrandType = ModelBrandType = __decorate([
    (0, mongoose_1.Schema)({ collection: "brand-type", timestamps: true })
], ModelBrandType);
exports.ModelBrandTypeSchema = mongoose_1.SchemaFactory.createForClass(ModelBrandType);
let ModelBrandImage = class ModelBrandImage {
};
exports.ModelBrandImage = ModelBrandImage;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelBrandImage.prototype, "photo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], ModelBrandImage.prototype, "image_data", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ModelBrandImage.prototype, "position", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Types.ObjectId, ref: "brand" }),
    __metadata("design:type", ModelBrand)
], ModelBrandImage.prototype, "post", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], ModelBrandImage.prototype, "is_main", void 0);
exports.ModelBrandImage = ModelBrandImage = __decorate([
    (0, mongoose_1.Schema)({ collection: "brand-image", timestamps: true })
], ModelBrandImage);
exports.ModelBrandImageSchema = mongoose_1.SchemaFactory.createForClass(ModelBrandImage);
