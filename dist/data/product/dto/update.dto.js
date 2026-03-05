"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSubProductDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_dto_1 = require("./create.dto");
class UpdateSubProductDto extends (0, mapped_types_1.PartialType)(create_dto_1.CreateSubProductDto) {
}
exports.UpdateSubProductDto = UpdateSubProductDto;
