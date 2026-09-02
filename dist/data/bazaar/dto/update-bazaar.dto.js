"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBazaarDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_bazaar_dto_1 = require("./create-bazaar.dto");
class UpdateBazaarDto extends (0, swagger_1.PartialType)(create_bazaar_dto_1.CreateBazaarDto) {
}
exports.UpdateBazaarDto = UpdateBazaarDto;
