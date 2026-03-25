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
exports.ModelAddressSchema = exports.ModelAddress = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const class_validator_1 = require("class-validator");
const country_1 = require("../../country");
const customer_1 = require("../../customer");
const district_1 = require("../../district");
const region_1 = require("../../region");
let ModelAddress = class ModelAddress {
};
exports.ModelAddress = ModelAddress;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: "country" }),
    __metadata("design:type", country_1.ModelCountry)
], ModelAddress.prototype, "country", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: "regions" }),
    __metadata("design:type", region_1.ModelRegion)
], ModelAddress.prototype, "region", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: "districts" }),
    __metadata("design:type", district_1.ModelDistricts)
], ModelAddress.prototype, "district", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ModelAddress.prototype, "lat", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ModelAddress.prototype, "long", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ModelAddress.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ModelAddress.prototype, "apartment", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ModelAddress.prototype, "corridor", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ModelAddress.prototype, "floor", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ModelAddress.prototype, "intercom_code", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ModelAddress.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: "customer" }),
    __metadata("design:type", customer_1.ModelCustomers)
], ModelAddress.prototype, "customer", void 0);
exports.ModelAddress = ModelAddress = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], ModelAddress);
exports.ModelAddressSchema = mongoose_1.SchemaFactory.createForClass(ModelAddress);
