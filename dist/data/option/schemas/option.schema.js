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
exports.ModelOptionSchema = exports.ModelOption = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const enums_1 = require("../../../enums");
let ModelOption = class ModelOption {
};
exports.ModelOption = ModelOption;
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], ModelOption.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'string', enum: enums_1.OptionType }),
    __metadata("design:type", String)
], ModelOption.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], ModelOption.prototype, "is_active", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], ModelOption.prototype, "is_deleted", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelOption.prototype, "deleted_at", void 0);
exports.ModelOption = ModelOption = __decorate([
    (0, mongoose_1.Schema)({ collection: 'option', timestamps: true })
], ModelOption);
exports.ModelOptionSchema = mongoose_1.SchemaFactory.createForClass(ModelOption);
