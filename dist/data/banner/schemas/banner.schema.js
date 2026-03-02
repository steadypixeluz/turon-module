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
exports.ModelBannerSchema = exports.ModelBanner = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const menu_1 = require("../../menu");
const product_1 = require("../../product");
const enums_1 = require("../../../enums");
let ModelBanner = class ModelBanner {
};
exports.ModelBanner = ModelBanner;
__decorate([
    (0, mongoose_1.Prop)({ unique: true }),
    __metadata("design:type", Number)
], ModelBanner.prototype, "uid", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], ModelBanner.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], ModelBanner.prototype, "photo_xl", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], ModelBanner.prototype, "photo_md", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], ModelBanner.prototype, "photo_sm", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelBanner.prototype, "photo_xl_all", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelBanner.prototype, "photo", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelBanner.prototype, "url", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelBanner.prototype, "section", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'string', enum: ['feed', 'category'] }),
    __metadata("design:type", String)
], ModelBanner.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'string', enum: ['internal', 'external', 'disabled', 'url'] }),
    __metadata("design:type", String)
], ModelBanner.prototype, "banner_type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'string', enum: ['hero', 'circle', 'square', 'product'] }),
    __metadata("design:type", String)
], ModelBanner.prototype, "view_type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [mongoose_2.default.Schema.Types.ObjectId], ref: 'Menu' }),
    __metadata("design:type", menu_1.ModelMenu)
], ModelBanner.prototype, "menu", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'banner' }),
    __metadata("design:type", ModelBanner)
], ModelBanner.prototype, "parent", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [mongoose_2.default.Schema.Types.ObjectId], ref: 'Product' }),
    __metadata("design:type", product_1.ModelProduct)
], ModelBanner.prototype, "products", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'string', enum: enums_1.ProductType, default: enums_1.ProductType.retail }),
    __metadata("design:type", String)
], ModelBanner.prototype, "showcase", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelBanner.prototype, "photo_md_all", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelBanner.prototype, "photo_sm_all", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ModelBanner.prototype, "position", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], ModelBanner.prototype, "is_active", void 0);
exports.ModelBanner = ModelBanner = __decorate([
    (0, mongoose_1.Schema)({ collection: 'banner', timestamps: true })
], ModelBanner);
exports.ModelBannerSchema = mongoose_1.SchemaFactory.createForClass(ModelBanner);
