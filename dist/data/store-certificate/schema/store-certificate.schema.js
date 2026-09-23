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
exports.ModelStoreCertificateSchema = exports.ModelStoreCertificate = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const store_1 = require("../../store");
let ModelStoreCertificate = class ModelStoreCertificate {
};
exports.ModelStoreCertificate = ModelStoreCertificate;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelStoreCertificate.prototype, "file", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelStoreCertificate.prototype, "photo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], ModelStoreCertificate.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], ModelStoreCertificate.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ModelStoreCertificate.prototype, "position", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Types.ObjectId, ref: "Store" }),
    __metadata("design:type", store_1.ModelStore)
], ModelStoreCertificate.prototype, "store", void 0);
exports.ModelStoreCertificate = ModelStoreCertificate = __decorate([
    (0, mongoose_1.Schema)({ collection: "store-certificate", timestamps: true })
], ModelStoreCertificate);
exports.ModelStoreCertificateSchema = mongoose_1.SchemaFactory.createForClass(ModelStoreCertificate);
