"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAppSettingDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_app_setting_dto_1 = require("./create-app-setting.dto");
class UpdateAppSettingDto extends (0, swagger_1.PartialType)(create_app_setting_dto_1.CreateAppSettingDto) {
}
exports.UpdateAppSettingDto = UpdateAppSettingDto;
