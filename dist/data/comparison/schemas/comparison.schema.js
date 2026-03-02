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
exports.ModelComparisonSchema = exports.ModelComparison = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const enums_1 = require("../../../enums");
const customer_1 = require("../../customer");
const menu_1 = require("../../menu");
let ModelComparison = class ModelComparison {
};
exports.ModelComparison = ModelComparison;
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], ModelComparison.prototype, "is_deleted", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'customer' }),
    __metadata("design:type", customer_1.ModelCustomers)
], ModelComparison.prototype, "customer", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'menu' }),
    __metadata("design:type", menu_1.ModelMenu)
], ModelComparison.prototype, "menu", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'products' }] }),
    __metadata("design:type", Array)
], ModelComparison.prototype, "products", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'string', enum: enums_1.ProductType, default: enums_1.ProductType.retail }),
    __metadata("design:type", String)
], ModelComparison.prototype, "showcase", void 0);
exports.ModelComparison = ModelComparison = __decorate([
    (0, mongoose_1.Schema)({ collection: 'comparison', timestamps: true })
], ModelComparison);
exports.ModelComparisonSchema = mongoose_1.SchemaFactory.createForClass(ModelComparison);
