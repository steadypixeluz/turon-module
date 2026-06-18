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
exports.ModelMessageSchema = exports.ModelMessage = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const chat_schemas_1 = require("./chat.schemas");
let ModelMessage = class ModelMessage {
};
exports.ModelMessage = ModelMessage;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Chat', required: true }),
    __metadata("design:type", chat_schemas_1.ModelChat)
], ModelMessage.prototype, "chatId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, required: true }),
    __metadata("design:type", String)
], ModelMessage.prototype, "senderId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: ['text', 'image', 'multiple'], default: 'text' }),
    __metadata("design:type", String)
], ModelMessage.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '' }),
    __metadata("design:type", String)
], ModelMessage.prototype, "content", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], ModelMessage.prototype, "images", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelMessage.prototype, "uuid", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], ModelMessage.prototype, "isRead", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, default: null }),
    __metadata("design:type", Date)
], ModelMessage.prototype, "readAt", void 0);
exports.ModelMessage = ModelMessage = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], ModelMessage);
exports.ModelMessageSchema = mongoose_1.SchemaFactory.createForClass(ModelMessage);
