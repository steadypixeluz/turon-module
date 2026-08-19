"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateIkpuDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_ikpu_dto_1 = require("./create-ikpu.dto");
class UpdateIkpuDto extends (0, swagger_1.PartialType)(create_ikpu_dto_1.CreateIkpuDto) {
}
exports.UpdateIkpuDto = UpdateIkpuDto;
