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
exports.ModelOrderWholesaleSchema = exports.ModelOrderWholesale = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const enums_1 = require("../../../enums");
const country_1 = require("../../country");
const customer_1 = require("../../customer");
let ModelOrderWholesale = class ModelOrderWholesale {
};
exports.ModelOrderWholesale = ModelOrderWholesale;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'customers' }),
    __metadata("design:type", customer_1.ModelCustomers)
], ModelOrderWholesale.prototype, "customer", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ModelOrderWholesale.prototype, "order_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelOrderWholesale.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelOrderWholesale.prototype, "date", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], ModelOrderWholesale.prototype, "carts", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelOrderWholesale.prototype, "receiver_fullname", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelOrderWholesale.prototype, "receiver_phone_number", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelOrderWholesale.prototype, "company_name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'country' }),
    __metadata("design:type", country_1.ModelCountry)
], ModelOrderWholesale.prototype, "country", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ModelOrderWholesale.prototype, "sale_price", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: 'string',
        enum: enums_1.OrderWholesaleStatus,
        default: enums_1.OrderWholesaleStatus.draft,
    }),
    __metadata("design:type", String)
], ModelOrderWholesale.prototype, "status", void 0);
exports.ModelOrderWholesale = ModelOrderWholesale = __decorate([
    (0, mongoose_1.Schema)({ collection: 'order-wholesale', timestamps: true })
], ModelOrderWholesale);
exports.ModelOrderWholesaleSchema = mongoose_1.SchemaFactory.createForClass(ModelOrderWholesale);
