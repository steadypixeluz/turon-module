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
exports.ModelProductOptionSchema = exports.ModelProductOption = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const product_1 = require("../../product");
const option_1 = require("../../option");
const option_select_1 = require("../../option-select");
let ModelProductOption = class ModelProductOption {
};
exports.ModelProductOption = ModelProductOption;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'product' }),
    __metadata("design:type", product_1.ModelProductInfo)
], ModelProductOption.prototype, "product_info", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'option' }),
    __metadata("design:type", option_1.ModelOption)
], ModelProductOption.prototype, "option", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'option-select' }),
    __metadata("design:type", option_select_1.ModelOptionSelect)
], ModelProductOption.prototype, "option_select", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelProductOption.prototype, "value", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], ModelProductOption.prototype, "value_name", void 0);
exports.ModelProductOption = ModelProductOption = __decorate([
    (0, mongoose_1.Schema)({ collection: 'product-option', timestamps: true })
], ModelProductOption);
exports.ModelProductOptionSchema = mongoose_1.SchemaFactory.createForClass(ModelProductOption);
