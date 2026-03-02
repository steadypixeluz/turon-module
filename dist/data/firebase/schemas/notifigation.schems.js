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
exports.ModelNotificationsSchema = exports.ModelNotifications = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const customer_1 = require("../../customer");
let ModelNotifications = class ModelNotifications {
};
exports.ModelNotifications = ModelNotifications;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelNotifications.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'customers' }),
    __metadata("design:type", customer_1.ModelCustomers)
], ModelNotifications.prototype, "customer", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelNotifications.prototype, "content", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'string' }),
    __metadata("design:type", String)
], ModelNotifications.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], ModelNotifications.prototype, "is_read", void 0);
exports.ModelNotifications = ModelNotifications = __decorate([
    (0, mongoose_1.Schema)({ collection: 'notificetions', timestamps: true })
], ModelNotifications);
exports.ModelNotificationsSchema = mongoose_1.SchemaFactory.createForClass(ModelNotifications);
