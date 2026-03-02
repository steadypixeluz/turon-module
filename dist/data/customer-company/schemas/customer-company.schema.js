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
exports.ModelCustomerCompanySchema = exports.ModelCustomerCompany = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const enums_1 = require("../../../enums");
const country_1 = require("../../country");
const district_1 = require("../../district");
const region_1 = require("../../region");
let ModelCustomerCompany = class ModelCustomerCompany {
};
exports.ModelCustomerCompany = ModelCustomerCompany;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelCustomerCompany.prototype, "company_name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ unique: true }),
    __metadata("design:type", String)
], ModelCustomerCompany.prototype, "company_inn", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelCustomerCompany.prototype, "company_okonx", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelCustomerCompany.prototype, "company_address", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelCustomerCompany.prototype, "origin_latitude", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelCustomerCompany.prototype, "origin_address", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelCustomerCompany.prototype, "origin_longitude", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Types.ObjectId, ref: 'Country' }),
    __metadata("design:type", country_1.ModelCountry)
], ModelCustomerCompany.prototype, "company_country", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Types.ObjectId, ref: 'Regions' }),
    __metadata("design:type", region_1.ModelRegion)
], ModelCustomerCompany.prototype, "company_region", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Types.ObjectId, ref: 'Districts' }),
    __metadata("design:type", district_1.ModelDistricts)
], ModelCustomerCompany.prototype, "company_district", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelCustomerCompany.prototype, "company_email", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelCustomerCompany.prototype, "company_phone", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelCustomerCompany.prototype, "post_code", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelCustomerCompany.prototype, "director_pinfl", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelCustomerCompany.prototype, "director_name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelCustomerCompany.prototype, "company_mfo", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelCustomerCompany.prototype, "company_bank_name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelCustomerCompany.prototype, "company_bank_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'string', enum: enums_1.CustomerCompanyStatus, default: enums_1.CustomerCompanyStatus.new }),
    __metadata("design:type", String)
], ModelCustomerCompany.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [mongoose_2.default.Schema.Types.ObjectId], ref: 'Customer' }),
    __metadata("design:type", Array)
], ModelCustomerCompany.prototype, "customers", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelCustomerCompany.prototype, "web_site", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelCustomerCompany.prototype, "logo", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelCustomerCompany.prototype, "invoice_logo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], ModelCustomerCompany.prototype, "is_deleted", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], ModelCustomerCompany.prototype, "deleted_at", void 0);
exports.ModelCustomerCompany = ModelCustomerCompany = __decorate([
    (0, mongoose_1.Schema)({ collection: 'customers-company', timestamps: true })
], ModelCustomerCompany);
exports.ModelCustomerCompanySchema = mongoose_1.SchemaFactory.createForClass(ModelCustomerCompany);
