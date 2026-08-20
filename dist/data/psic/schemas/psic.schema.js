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
exports.ModelPsicSchema = exports.ModelPsic = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let ModelPsic = class ModelPsic {
};
exports.ModelPsic = ModelPsic;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, unique: true, trim: true }),
    __metadata("design:type", String)
], ModelPsic.prototype, "psic", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], ModelPsic.prototype, "psicName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], ModelPsic.prototype, "groupName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], ModelPsic.prototype, "className", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], ModelPsic.prototype, "positionName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], ModelPsic.prototype, "subPositionName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: true }),
    __metadata("design:type", Boolean)
], ModelPsic.prototype, "isValidForCategory", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], ModelPsic.prototype, "isVatRelief", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: true }),
    __metadata("design:type", Boolean)
], ModelPsic.prototype, "is_active", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], ModelPsic.prototype, "is_deleted", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: null }),
    __metadata("design:type", String)
], ModelPsic.prototype, "deleted_at", void 0);
exports.ModelPsic = ModelPsic = __decorate([
    (0, mongoose_1.Schema)({ collection: 'psics', timestamps: true })
], ModelPsic);
exports.ModelPsicSchema = mongoose_1.SchemaFactory.createForClass(ModelPsic);
exports.ModelPsicSchema.index({ psic: 1 }, { unique: true });
exports.ModelPsicSchema.index({ is_deleted: 1, is_active: 1 });
