"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSizeValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const types = [
    'video/mp4',
    'video/mpeg',
    'video/ogg',
    'video/webm',
    'image/apng',
    'image/avif',
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
];
let FileSizeValidationPipe = class FileSizeValidationPipe {
    transform(value, typesmetadata) {
        // "value" is an object containing the file's attributes and metadata
        if (value.size > 10) {
            throw new common_1.HttpException({ message: 'File size big', statusCode: 422 }, common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
        if (!types.includes(value.mimetype)) {
            throw new common_1.HttpException({ message: 'Bad file type', statusCode: 415 }, common_1.HttpStatus.UNSUPPORTED_MEDIA_TYPE);
        }
        return true;
    }
};
exports.FileSizeValidationPipe = FileSizeValidationPipe;
exports.FileSizeValidationPipe = FileSizeValidationPipe = __decorate([
    (0, common_1.Injectable)()
], FileSizeValidationPipe);
