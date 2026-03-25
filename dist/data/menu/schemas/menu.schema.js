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
exports.ModelMenuSchema = exports.ModelMenu = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const enums_1 = require("../../../enums");
let ModelMenu = class ModelMenu {
};
exports.ModelMenu = ModelMenu;
__decorate([
    (0, mongoose_1.Prop)({ unique: true }),
    __metadata("design:type", Number)
], ModelMenu.prototype, "uid", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], ModelMenu.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], ModelMenu.prototype, "subtitle", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], ModelMenu.prototype, "content", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 1 }),
    __metadata("design:type", Number)
], ModelMenu.prototype, "position", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelMenu.prototype, "link", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelMenu.prototype, "svg_icon", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'string', enum: enums_1.MenuType }),
    __metadata("design:type", String)
], ModelMenu.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], enum: enums_1.MenuDataType, index: true }),
    __metadata("design:type", Array)
], ModelMenu.prototype, "datatype", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelMenu.prototype, "group", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Menu', index: true }),
    __metadata("design:type", ModelMenu)
], ModelMenu.prototype, "menu", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelMenu.prototype, "photo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], ModelMenu.prototype, "on_header", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], ModelMenu.prototype, "on_footer", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], ModelMenu.prototype, "on_slider", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true, index: true }),
    __metadata("design:type", Boolean)
], ModelMenu.prototype, "is_active", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], ModelMenu.prototype, "is_category", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false, index: true }),
    __metadata("design:type", Boolean)
], ModelMenu.prototype, "is_admin", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], ModelMenu.prototype, "has_category", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false, index: true }),
    __metadata("design:type", Boolean)
], ModelMenu.prototype, "is_deleted", void 0);
exports.ModelMenu = ModelMenu = __decorate([
    (0, mongoose_1.Schema)({ collection: 'menu', timestamps: true })
], ModelMenu);
exports.ModelMenuSchema = mongoose_1.SchemaFactory.createForClass(ModelMenu);
