"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMenuPermissionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_menu_permission_dto_1 = require("./create-menu-permission.dto");
class UpdateMenuPermissionDto extends (0, swagger_1.PartialType)(create_menu_permission_dto_1.CreateMenuPermissionDto) {
}
exports.UpdateMenuPermissionDto = UpdateMenuPermissionDto;
