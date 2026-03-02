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
exports.ModelDeviceDataSchema = exports.ModelDeviceData = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const enums_1 = require("../../../enums");
let ModelDeviceData = class ModelDeviceData {
};
exports.ModelDeviceData = ModelDeviceData;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelDeviceData.prototype, "ip_address", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelDeviceData.prototype, "referal_code", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelDeviceData.prototype, "user_agent", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelDeviceData.prototype, "language", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelDeviceData.prototype, "timezone", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelDeviceData.prototype, "fingerprint", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: enums_1.DeviceStatus,
        default: enums_1.DeviceStatus.PENDING,
    }),
    __metadata("design:type", String)
], ModelDeviceData.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelDeviceData.prototype, "width", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelDeviceData.prototype, "height", void 0);
exports.ModelDeviceData = ModelDeviceData = __decorate([
    (0, mongoose_1.Schema)({ collection: 'device-data', timestamps: true })
], ModelDeviceData);
exports.ModelDeviceDataSchema = mongoose_1.SchemaFactory.createForClass(ModelDeviceData);
