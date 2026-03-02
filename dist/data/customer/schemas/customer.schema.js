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
exports.ModelPhotoSearchProductsSchema = exports.ModelPhotoSearchProducts = exports.ModelRecommentProductsSchema = exports.ModelRecommentProducts = exports.ModelCustomersSchema = exports.ModelCustomers = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const country_1 = require("../../country");
let ModelCustomers = class ModelCustomers {
};
exports.ModelCustomers = ModelCustomers;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelCustomers.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ModelCustomers.prototype, "password_length", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ModelCustomers.prototype, "coin", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelCustomers.prototype, "phone_number", void 0);
__decorate([
    (0, mongoose_1.Prop)({ unique: true }),
    __metadata("design:type", String)
], ModelCustomers.prototype, "promo_code", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelCustomers.prototype, "first_name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelCustomers.prototype, "last_name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelCustomers.prototype, "profile_qr", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], ModelCustomers.prototype, "wallet", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelCustomers.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Types.ObjectId, ref: 'Country' }),
    __metadata("design:type", country_1.ModelCountry)
], ModelCustomers.prototype, "country", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Types.ObjectId, ref: 'referrer' }),
    __metadata("design:type", ModelCustomers)
], ModelCustomers.prototype, "referrer", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelCustomers.prototype, "birth_date", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], ModelCustomers.prototype, "birth_date_format", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelCustomers.prototype, "gender", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelCustomers.prototype, "lang", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelCustomers.prototype, "photo", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelCustomers.prototype, "fbToken", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelCustomers.prototype, "register_by", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'customer' }),
    __metadata("design:type", String)
], ModelCustomers.prototype, "role", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], ModelCustomers.prototype, "push_notification", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], ModelCustomers.prototype, "sms_notification", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], ModelCustomers.prototype, "email_notification", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], ModelCustomers.prototype, "is_deleted", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], ModelCustomers.prototype, "deleted_at", void 0);
exports.ModelCustomers = ModelCustomers = __decorate([
    (0, mongoose_1.Schema)({ collection: 'customers', timestamps: true })
], ModelCustomers);
exports.ModelCustomersSchema = mongoose_1.SchemaFactory.createForClass(ModelCustomers);
let ModelRecommentProducts = class ModelRecommentProducts {
};
exports.ModelRecommentProducts = ModelRecommentProducts;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'customers' }),
    __metadata("design:type", ModelCustomers)
], ModelRecommentProducts.prototype, "customer", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelRecommentProducts.prototype, "showcase", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [{ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Menu' }],
        default: [],
    }),
    __metadata("design:type", Array)
], ModelRecommentProducts.prototype, "menu", void 0);
exports.ModelRecommentProducts = ModelRecommentProducts = __decorate([
    (0, mongoose_1.Schema)({ collection: 'recomment-products', timestamps: true })
], ModelRecommentProducts);
exports.ModelRecommentProductsSchema = mongoose_1.SchemaFactory.createForClass(ModelRecommentProducts);
let ModelPhotoSearchProducts = class ModelPhotoSearchProducts {
};
exports.ModelPhotoSearchProducts = ModelPhotoSearchProducts;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'customers' }),
    __metadata("design:type", ModelCustomers)
], ModelPhotoSearchProducts.prototype, "customer", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelPhotoSearchProducts.prototype, "showcase", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [{ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'products' }],
        default: [],
    }),
    __metadata("design:type", Array)
], ModelPhotoSearchProducts.prototype, "products", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: [],
    }),
    __metadata("design:type", Array)
], ModelPhotoSearchProducts.prototype, "ai_response", void 0);
exports.ModelPhotoSearchProducts = ModelPhotoSearchProducts = __decorate([
    (0, mongoose_1.Schema)({ collection: 'photo-search-products', timestamps: true })
], ModelPhotoSearchProducts);
exports.ModelPhotoSearchProductsSchema = mongoose_1.SchemaFactory.createForClass(ModelPhotoSearchProducts);
