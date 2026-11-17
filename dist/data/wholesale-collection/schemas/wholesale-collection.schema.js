"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelWholesaleCollectionSchema = exports.ModelWholesaleCollection = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importStar(require("mongoose"));
const menu_1 = require("../../menu");
const product_1 = require("../../product");
const country_1 = require("../../../data/country");
let ModelWholesaleCollection = class ModelWholesaleCollection {
};
exports.ModelWholesaleCollection = ModelWholesaleCollection;
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], ModelWholesaleCollection.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: "string", enum: ["slider", "column"], default: "slider" }),
    __metadata("design:type", String)
], ModelWholesaleCollection.prototype, "view_type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: "string", enum: ["feed", "category"], default: "feed" }),
    __metadata("design:type", String)
], ModelWholesaleCollection.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: "string", enum: ["mobile", "site"], default: "site" }),
    __metadata("design:type", String)
], ModelWholesaleCollection.prototype, "device", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [mongoose_2.default.Schema.Types.ObjectId], ref: "Menu" }),
    __metadata("design:type", menu_1.ModelMenu)
], ModelWholesaleCollection.prototype, "menu", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], ModelWholesaleCollection.prototype, "group", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: "Promo" }),
    __metadata("design:type", ModelWholesaleCollection)
], ModelWholesaleCollection.prototype, "promo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [mongoose_2.default.Schema.Types.ObjectId], ref: "Product" }),
    __metadata("design:type", product_1.ModelProduct)
], ModelWholesaleCollection.prototype, "products", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ModelWholesaleCollection.prototype, "position", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Types.ObjectId, ref: "country" }),
    __metadata("design:type", country_1.ModelCountry)
], ModelWholesaleCollection.prototype, "country", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], ModelWholesaleCollection.prototype, "is_active", void 0);
exports.ModelWholesaleCollection = ModelWholesaleCollection = __decorate([
    (0, mongoose_1.Schema)({ collection: "wholesale-collections", timestamps: true })
], ModelWholesaleCollection);
exports.ModelWholesaleCollectionSchema = mongoose_1.SchemaFactory.createForClass(ModelWholesaleCollection);
exports.ModelWholesaleCollectionSchema.index({
    is_active: 1,
    device: 1,
    position: 1,
    createdAt: -1,
});
exports.ModelWholesaleCollectionSchema.index({ group: 1, position: 1, createdAt: -1 });
