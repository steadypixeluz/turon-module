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
exports.ModelMenuOptionSchema = exports.ModelMenuOption = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const menu_schema_1 = require("../../menu/schemas/menu.schema");
const option_1 = require("../../option");
let ModelMenuOption = class ModelMenuOption {
};
exports.ModelMenuOption = ModelMenuOption;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Option' }),
    __metadata("design:type", option_1.ModelOption)
], ModelMenuOption.prototype, "option", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Menu' }),
    __metadata("design:type", menu_schema_1.ModelMenu)
], ModelMenuOption.prototype, "menu", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], ModelMenuOption.prototype, "on_filter", void 0);
exports.ModelMenuOption = ModelMenuOption = __decorate([
    (0, mongoose_1.Schema)({ collection: 'menu-option', timestamps: true })
], ModelMenuOption);
exports.ModelMenuOptionSchema = mongoose_1.SchemaFactory.createForClass(ModelMenuOption);
