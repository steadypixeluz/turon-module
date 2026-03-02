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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelBuyCoinSchema = exports.ModelBuyCoin = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let ModelBuyCoin = class ModelBuyCoin {
};
exports.ModelBuyCoin = ModelBuyCoin;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelBuyCoin.prototype, "photo", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelBuyCoin.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ModelBuyCoin.prototype, "position", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ModelBuyCoin.prototype, "coin_count", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ModelBuyCoin.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ModelBuyCoin.prototype, "sale_price", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], ModelBuyCoin.prototype, "is_active", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], ModelBuyCoin.prototype, "sale_status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], ModelBuyCoin.prototype, "is_deleted", void 0);
exports.ModelBuyCoin = ModelBuyCoin = __decorate([
    (0, mongoose_1.Schema)({ collection: 'buy-coin', timestamps: true })
], ModelBuyCoin);
exports.ModelBuyCoinSchema = mongoose_1.SchemaFactory.createForClass(ModelBuyCoin);
