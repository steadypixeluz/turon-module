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
exports.DICTIONARY_SEED = exports.CreateDictionaryDto = void 0;
const class_validator_1 = require("class-validator");
const schema_1 = require("./schema");
class CreateDictionaryDto {
}
exports.CreateDictionaryDto = CreateDictionaryDto;
__decorate([
    (0, class_validator_1.IsEnum)(schema_1.DictionaryCategory),
    __metadata("design:type", String)
], CreateDictionaryDto.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], CreateDictionaryDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateDictionaryDto.prototype, "order", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateDictionaryDto.prototype, "is_active", void 0);
exports.DICTIONARY_SEED = [
    // ── Кузов (Body types) ────────────────────────────────────
    {
        category: schema_1.DictionaryCategory.BODY_TYPE,
        label: 'Все закр.+изотерм',
        slug: 'all_closed_isotherm',
        order: 1,
    },
    {
        category: schema_1.DictionaryCategory.BODY_TYPE,
        label: 'Тентованный',
        slug: 'tent',
        order: 2,
    },
    {
        category: schema_1.DictionaryCategory.BODY_TYPE,
        label: 'Все открытые',
        slug: 'all_open',
        order: 3,
    },
    {
        category: schema_1.DictionaryCategory.BODY_TYPE,
        label: 'Реф.+изотерм',
        slug: 'ref_isotherm',
        order: 4,
    },
    {
        category: schema_1.DictionaryCategory.BODY_TYPE,
        label: 'Рефрижератор',
        slug: 'ref',
        order: 5,
    },
    // ── Загрузка (Loading types) ──────────────────────────────
    {
        category: schema_1.DictionaryCategory.LOADING_TYPE,
        label: 'Рефрижератор',
        slug: 'ref',
        order: 1,
    },
    {
        category: schema_1.DictionaryCategory.LOADING_TYPE,
        label: 'Тентованный',
        slug: 'tent',
        order: 2,
    },
    {
        category: schema_1.DictionaryCategory.LOADING_TYPE,
        label: 'Реф.+изотерм',
        slug: 'ref_iso',
        order: 3,
    },
    {
        category: schema_1.DictionaryCategory.LOADING_TYPE,
        label: 'Все закр.+изотерм',
        slug: 'all_cl',
        order: 4,
    },
    {
        category: schema_1.DictionaryCategory.LOADING_TYPE,
        label: 'Тентованный',
        slug: 'tent2',
        order: 5,
    },
    // ── Выгрузка (Unloading types) ────────────────────────────
    {
        category: schema_1.DictionaryCategory.UNLOADING_TYPE,
        label: 'Реф.+изотерм',
        slug: 'ref_iso',
        order: 1,
    },
    {
        category: schema_1.DictionaryCategory.UNLOADING_TYPE,
        label: 'Все закр.+изотерм',
        slug: 'all_cl',
        order: 2,
    },
    {
        category: schema_1.DictionaryCategory.UNLOADING_TYPE,
        label: 'Рефрижератор',
        slug: 'ref',
        order: 3,
    },
    {
        category: schema_1.DictionaryCategory.UNLOADING_TYPE,
        label: 'Тентованный',
        slug: 'tent',
        order: 4,
    },
];
