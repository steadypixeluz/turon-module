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
exports.ModelAppSettingSchema = exports.ModelAppSetting = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const enums_1 = require("../../../enums");
let ModelAppSetting = class ModelAppSetting {
};
exports.ModelAppSetting = ModelAppSetting;
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], ModelAppSetting.prototype, "head_title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], ModelAppSetting.prototype, "modal_title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], ModelAppSetting.prototype, "mobile_title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], ModelAppSetting.prototype, "modal_description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], ModelAppSetting.prototype, "mobile_description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], ModelAppSetting.prototype, "head_description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: "string", enum: enums_1.Status, default: enums_1.Status.on }),
    __metadata("design:type", String)
], ModelAppSetting.prototype, "site_status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: "string", enum: enums_1.Status, default: enums_1.Status.on }),
    __metadata("design:type", String)
], ModelAppSetting.prototype, "mobile_status", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelAppSetting.prototype, "head_image", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelAppSetting.prototype, "min_ios_version", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelAppSetting.prototype, "min_android_version", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelAppSetting.prototype, "last_ios_version", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelAppSetting.prototype, "last_android_version", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelAppSetting.prototype, "admin_logo", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelAppSetting.prototype, "admin_logo_mini", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelAppSetting.prototype, "keywords", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], ModelAppSetting.prototype, "post_statistic_menu", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelAppSetting.prototype, "additional_file", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelAppSetting.prototype, "additional_file2", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelAppSetting.prototype, "app_name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelAppSetting.prototype, "telegram_group_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], ModelAppSetting.prototype, "test_mode", void 0);
exports.ModelAppSetting = ModelAppSetting = __decorate([
    (0, mongoose_1.Schema)({ collection: "app-setting", timestamps: true })
], ModelAppSetting);
exports.ModelAppSettingSchema = mongoose_1.SchemaFactory.createForClass(ModelAppSetting);
