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
exports.ModelWholesaleCollectionSchema = exports.ModelWholesaleCollection = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const menu_1 = require("../../menu");
const product_1 = require("../../product");
let ModelWholesaleCollection = class ModelWholesaleCollection {
};
exports.ModelWholesaleCollection = ModelWholesaleCollection;
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], ModelWholesaleCollection.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'string', enum: ['slider', 'column'], default: 'slider' }),
    __metadata("design:type", String)
], ModelWholesaleCollection.prototype, "view_type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'string', enum: ['feed', 'category'], default: 'feed' }),
    __metadata("design:type", String)
], ModelWholesaleCollection.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'string', enum: ['mobile', 'site'], default: 'site' }),
    __metadata("design:type", String)
], ModelWholesaleCollection.prototype, "device", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [mongoose_2.default.Schema.Types.ObjectId], ref: 'Menu' }),
    __metadata("design:type", menu_1.ModelMenu)
], ModelWholesaleCollection.prototype, "menu", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Promo' }),
    __metadata("design:type", ModelWholesaleCollection)
], ModelWholesaleCollection.prototype, "promo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [mongoose_2.default.Schema.Types.ObjectId], ref: 'Product' }),
    __metadata("design:type", product_1.ModelProduct)
], ModelWholesaleCollection.prototype, "products", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ModelWholesaleCollection.prototype, "position", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], ModelWholesaleCollection.prototype, "is_active", void 0);
exports.ModelWholesaleCollection = ModelWholesaleCollection = __decorate([
    (0, mongoose_1.Schema)({ collection: 'wholesale-collections', timestamps: true })
], ModelWholesaleCollection);
exports.ModelWholesaleCollectionSchema = mongoose_1.SchemaFactory.createForClass(ModelWholesaleCollection);
