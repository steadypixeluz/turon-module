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
exports.ModelStoreCollectionSchema = exports.ModelStoreCollection = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const product_1 = require("../../product");
const enums_1 = require("../../../enums");
const store_1 = require("../../store");
let ModelStoreCollection = class ModelStoreCollection {
};
exports.ModelStoreCollection = ModelStoreCollection;
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], ModelStoreCollection.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: "string",
        enum: ["carousel", "hero", "circle", "overlay", "split", "solid"],
    }),
    __metadata("design:type", String)
], ModelStoreCollection.prototype, "view_type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: "StoreCollection" }),
    __metadata("design:type", ModelStoreCollection)
], ModelStoreCollection.prototype, "collection", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [mongoose_2.default.Schema.Types.ObjectId], ref: "Product" }),
    __metadata("design:type", product_1.ModelProduct)
], ModelStoreCollection.prototype, "products", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ModelStoreCollection.prototype, "position", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], ModelStoreCollection.prototype, "is_active", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: "string", enum: enums_1.ProductType, default: enums_1.ProductType.retail }),
    __metadata("design:type", String)
], ModelStoreCollection.prototype, "showcase", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Types.ObjectId, ref: "Store" }),
    __metadata("design:type", store_1.ModelStore)
], ModelStoreCollection.prototype, "store", void 0);
exports.ModelStoreCollection = ModelStoreCollection = __decorate([
    (0, mongoose_1.Schema)({ collection: "store-collections", timestamps: true })
], ModelStoreCollection);
exports.ModelStoreCollectionSchema = mongoose_1.SchemaFactory.createForClass(ModelStoreCollection);
exports.ModelStoreCollectionSchema.index({
    is_active: 1,
    view_type: 1,
    position: 1,
    createdAt: -1,
});
exports.ModelStoreCollectionSchema.index({ group: 1, position: 1, createdAt: -1 });
