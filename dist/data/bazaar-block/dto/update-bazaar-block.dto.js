"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBazaarBlockDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_bazaar_block_dto_1 = require("./create-bazaar-block.dto");
class UpdateBazaarBlockDto extends (0, swagger_1.PartialType)(create_bazaar_block_dto_1.CreateBazaarBlockDto) {
}
exports.UpdateBazaarBlockDto = UpdateBazaarBlockDto;
