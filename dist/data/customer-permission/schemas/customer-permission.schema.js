"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelCustomerPermissionSchema = exports.ModelCustomerPermission = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("@nestjs/mongoose");
const index_1 = require("../../index");
let ModelCustomerPermission = class ModelCustomerPermission {
};
exports.ModelCustomerPermission = ModelCustomerPermission;
__decorate([
    (0, mongoose_2.Prop)({ type: mongoose_1.default.Types.ObjectId, ref: "referrer" }),
    __metadata("design:type", index_1.ModelCustomers)
], ModelCustomerPermission.prototype, "customer", void 0);
__decorate([
    (0, mongoose_2.Prop)(),
    __metadata("design:type", String)
], ModelCustomerPermission.prototype, "platform", void 0);
__decorate([
    (0, mongoose_2.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], ModelCustomerPermission.prototype, "permission", void 0);
__decorate([
    (0, mongoose_2.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], ModelCustomerPermission.prototype, "entered", void 0);
exports.ModelCustomerPermission = ModelCustomerPermission = __decorate([
    (0, mongoose_2.Schema)({ collection: "customer-permission", timestamps: true })
], ModelCustomerPermission);
exports.ModelCustomerPermissionSchema = mongoose_2.SchemaFactory.createForClass(ModelCustomerPermission);
