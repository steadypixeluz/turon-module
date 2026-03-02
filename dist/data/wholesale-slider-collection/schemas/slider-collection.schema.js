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
exports.ModelWholesaleSliderCollectionSchema = exports.ModelWholesaleSliderCollection = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const menu_1 = require("../../menu");
const product_1 = require("../../product");
let ModelWholesaleSliderCollection = class ModelWholesaleSliderCollection {
};
exports.ModelWholesaleSliderCollection = ModelWholesaleSliderCollection;
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], ModelWholesaleSliderCollection.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'string', enum: ['feed', 'category'], default: 'feed' }),
    __metadata("design:type", String)
], ModelWholesaleSliderCollection.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [mongoose_2.default.Schema.Types.ObjectId], ref: 'Menu' }),
    __metadata("design:type", menu_1.ModelMenu)
], ModelWholesaleSliderCollection.prototype, "menu", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [mongoose_2.default.Schema.Types.ObjectId], ref: 'Product' }),
    __metadata("design:type", product_1.ModelProduct)
], ModelWholesaleSliderCollection.prototype, "products", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ModelWholesaleSliderCollection.prototype, "position", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelWholesaleSliderCollection.prototype, "photo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], ModelWholesaleSliderCollection.prototype, "is_active", void 0);
exports.ModelWholesaleSliderCollection = ModelWholesaleSliderCollection = __decorate([
    (0, mongoose_1.Schema)({ collection: 'wholesale-slider-collections', timestamps: true })
], ModelWholesaleSliderCollection);
exports.ModelWholesaleSliderCollectionSchema = mongoose_1.SchemaFactory.createForClass(ModelWholesaleSliderCollection);
