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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickTransactionSchema = exports.ClickTransaction = exports.ModelPaymeSchema = exports.ModelPayme = exports.Payment = exports.PaymeStatus = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const enums_1 = require("../../../enums");
var PaymeStatus;
(function (PaymeStatus) {
    PaymeStatus[PaymeStatus["paid"] = 2] = "paid";
    PaymeStatus[PaymeStatus["cancel"] = -1] = "cancel";
    PaymeStatus[PaymeStatus["perform_cancel"] = -2] = "perform_cancel";
    PaymeStatus[PaymeStatus["new"] = 1] = "new";
})(PaymeStatus || (exports.PaymeStatus = PaymeStatus = {}));
var Payment;
(function (Payment) {
    Payment[Payment["coin"] = 2] = "coin";
    Payment[Payment["product"] = 1] = "product";
})(Payment || (exports.Payment = Payment = {}));
// 1 = oplata kutulyapti  2 = oplata tolandi  -1 = oplata otmen boldi  -2 = oplata tolangandan kegin otmen boldi
let ModelPayme = class ModelPayme {
};
exports.ModelPayme = ModelPayme;
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], ModelPayme.prototype, "check", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelPayme.prototype, "order_uid", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ModelPayme.prototype, "amount", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelPayme.prototype, "transaction_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'number', enum: PaymeStatus, default: PaymeStatus.new }),
    __metadata("design:type", Number)
], ModelPayme.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'number', enum: Payment }),
    __metadata("design:type", Number)
], ModelPayme.prototype, "payment", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelPayme.prototype, "time", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], ModelPayme.prototype, "is_deleted", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelPayme.prototype, "deleted_at", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], ModelPayme.prototype, "cancel_time", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], ModelPayme.prototype, "create_time", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], ModelPayme.prototype, "perform_time", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", Number)
], ModelPayme.prototype, "reason", void 0);
exports.ModelPayme = ModelPayme = __decorate([
    (0, mongoose_1.Schema)({ collection: 'payme-transaction', timestamps: true })
], ModelPayme);
exports.ModelPaymeSchema = mongoose_1.SchemaFactory.createForClass(ModelPayme);
let ClickTransaction = class ClickTransaction {
};
exports.ClickTransaction = ClickTransaction;
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], ClickTransaction.prototype, "check", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ClickTransaction.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ClickTransaction.prototype, "click_paydoc_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ClickTransaction.prototype, "order_info_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'number', enum: Payment }),
    __metadata("design:type", Number)
], ClickTransaction.prototype, "payment", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, enum: enums_1.ClickTransactionState }),
    __metadata("design:type", Number)
], ClickTransaction.prototype, "state", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ClickTransaction.prototype, "amount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: () => Date.now() }),
    __metadata("design:type", Number)
], ClickTransaction.prototype, "create_time", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], ClickTransaction.prototype, "perform_time", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], ClickTransaction.prototype, "cancel_time", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", Number)
], ClickTransaction.prototype, "reason", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ClickTransaction.prototype, "prepare_id", void 0);
exports.ClickTransaction = ClickTransaction = __decorate([
    (0, mongoose_1.Schema)({ collection: 'click-transaction', timestamps: true })
], ClickTransaction);
exports.ClickTransactionSchema = mongoose_1.SchemaFactory.createForClass(ClickTransaction);
