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
exports.ModelUserSchema = exports.ModelUser = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const enums_1 = require("../../../enums");
let ModelUser = class ModelUser {
};
exports.ModelUser = ModelUser;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], ModelUser.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelUser.prototype, "login", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelUser.prototype, "phone_number", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelUser.prototype, "full_name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: enums_1.Role.admin }),
    __metadata("design:type", String)
], ModelUser.prototype, "role", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], ModelUser.prototype, "is_deleted", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], ModelUser.prototype, "is_active", void 0);
exports.ModelUser = ModelUser = __decorate([
    (0, mongoose_1.Schema)({ collection: 'users', timestamps: true })
], ModelUser);
exports.ModelUserSchema = mongoose_1.SchemaFactory.createForClass(ModelUser);
