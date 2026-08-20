"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePsicDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_psic_dto_1 = require("./create-psic.dto");
class UpdatePsicDto extends (0, swagger_1.PartialType)(create_psic_dto_1.CreatePsicDto) {
}
exports.UpdatePsicDto = UpdatePsicDto;
