"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderWholesaleDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_dto_1 = require("./create.dto");
class UpdateOrderWholesaleDto extends (0, swagger_1.PartialType)(create_dto_1.CreateOrderWholesaleDto) {
}
exports.UpdateOrderWholesaleDto = UpdateOrderWholesaleDto;
