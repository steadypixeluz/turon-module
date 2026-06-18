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
exports.DictionarySchema = exports.Dictionary = exports.DictionaryCategory = void 0;
const mongoose_1 = require("@nestjs/mongoose");
var DictionaryCategory;
(function (DictionaryCategory) {
    DictionaryCategory["BODY_TYPE"] = "body_type";
    DictionaryCategory["LOADING_TYPE"] = "loading_type";
    DictionaryCategory["UNLOADING_TYPE"] = "unloading_type";
    DictionaryCategory["CARRYING_CAPACITY"] = "carrying_capacity";
})(DictionaryCategory || (exports.DictionaryCategory = DictionaryCategory = {}));
let Dictionary = class Dictionary {
};
exports.Dictionary = Dictionary;
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: Object.values(DictionaryCategory),
        required: true,
    }),
    __metadata("design:type", String)
], Dictionary.prototype, "category", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], Dictionary.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], Dictionary.prototype, "order", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: true }),
    __metadata("design:type", Boolean)
], Dictionary.prototype, "is_active", void 0);
exports.Dictionary = Dictionary = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, collection: 'dictionaries' })
], Dictionary);
exports.DictionarySchema = mongoose_1.SchemaFactory.createForClass(Dictionary);
exports.DictionarySchema.index({ category: 1, isActive: 1 });
exports.DictionarySchema.index({ category: 1, order: 1 });
// slug unique per category
// DictionarySchema.index({ category: 1, slug: 1 }, { unique: true, sparse: true });
