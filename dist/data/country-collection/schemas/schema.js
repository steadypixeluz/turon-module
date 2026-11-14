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
exports.ModelCountryCollectionSchema = exports.ModelCountryCollection = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const product_1 = require("../../product");
const enums_1 = require("../../../enums");
const menu_1 = require("../../../data/menu");
const country_schema_1 = require("../../../data/country/schemas/country.schema");
let ModelCountryCollection = class ModelCountryCollection {
};
exports.ModelCountryCollection = ModelCountryCollection;
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], ModelCountryCollection.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: "string",
        enum: ["carousel", "hero", "about", "circle", "overlay", "split", "solid"],
    }),
    __metadata("design:type", String)
], ModelCountryCollection.prototype, "view_type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: "string", enum: ["collection", "product"] }),
    __metadata("design:type", String)
], ModelCountryCollection.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], ModelCountryCollection.prototype, "title_view", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelCountryCollection.prototype, "photo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: "CountryCollection" }),
    __metadata("design:type", ModelCountryCollection)
], ModelCountryCollection.prototype, "collection", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [mongoose_2.default.Schema.Types.ObjectId], ref: "Product" }),
    __metadata("design:type", product_1.ModelProduct)
], ModelCountryCollection.prototype, "products", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [mongoose_2.default.Schema.Types.ObjectId], ref: "Menu" }),
    __metadata("design:type", menu_1.ModelMenu)
], ModelCountryCollection.prototype, "menu", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ModelCountryCollection.prototype, "position", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], ModelCountryCollection.prototype, "is_active", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: "string", enum: enums_1.ProductType, default: enums_1.ProductType.retail }),
    __metadata("design:type", String)
], ModelCountryCollection.prototype, "showcase", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Types.ObjectId, ref: "country" }),
    __metadata("design:type", country_schema_1.ModelCountry)
], ModelCountryCollection.prototype, "country", void 0);
exports.ModelCountryCollection = ModelCountryCollection = __decorate([
    (0, mongoose_1.Schema)({ collection: "country-collections", timestamps: true })
], ModelCountryCollection);
exports.ModelCountryCollectionSchema = mongoose_1.SchemaFactory.createForClass(ModelCountryCollection);
exports.ModelCountryCollectionSchema.index({
    is_active: 1,
    view_type: 1,
    position: 1,
    createdAt: -1,
});
