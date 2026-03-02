"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateComparisonDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_comparison_dto_1 = require("./create-comparison.dto");
class UpdateComparisonDto extends (0, swagger_1.PartialType)(create_comparison_dto_1.CreateComparisonDto) {
}
exports.UpdateComparisonDto = UpdateComparisonDto;
