"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFaqCategoryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_faq_category_dto_1 = require("./create-faq-category.dto");
class UpdateFaqCategoryDto extends (0, swagger_1.PartialType)(create_faq_category_dto_1.CreateFaqCategoryDto) {
}
exports.UpdateFaqCategoryDto = UpdateFaqCategoryDto;
