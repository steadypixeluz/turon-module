"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelOfferSchema = exports.ModelOffer = exports.CargoWeight = exports.UnloadingPoint = exports.LoadingPoint = exports.GeoPoint = exports.PaymentTerms = exports.Rate = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importStar(require("mongoose"));
const index_1 = require("src/index");
let Rate = class Rate {
};
exports.Rate = Rate;
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], Rate.prototype, "priceWithVat", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], Rate.prototype, "priceWithoutVat", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], Rate.prototype, "priceCash", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], Rate.prototype, "byCard", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: 'UZS' }),
    __metadata("design:type", String)
], Rate.prototype, "currency", void 0);
exports.Rate = Rate = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], Rate);
let PaymentTerms = class PaymentTerms {
};
exports.PaymentTerms = PaymentTerms;
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], PaymentTerms.prototype, "prepayment", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: ['not_selected', 'payment_via', 'payment_unloading'],
    }),
    __metadata("design:type", String)
], PaymentTerms.prototype, "postpaymentPeriod", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], PaymentTerms.prototype, "bankDay", void 0);
exports.PaymentTerms = PaymentTerms = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], PaymentTerms);
let GeoPoint = class GeoPoint {
};
exports.GeoPoint = GeoPoint;
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: ['Point'], default: 'Point' }),
    __metadata("design:type", String)
], GeoPoint.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [Number], default: [0, 0] }),
    __metadata("design:type", Array)
], GeoPoint.prototype, "coordinates", void 0);
exports.GeoPoint = GeoPoint = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], GeoPoint);
(0, mongoose_1.Schema)({ _id: false });
class LoadingPoint {
}
exports.LoadingPoint = LoadingPoint;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Types.ObjectId, ref: 'Country' }),
    __metadata("design:type", index_1.ModelCargoCountry)
], LoadingPoint.prototype, "country", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Types.ObjectId, ref: 'Region' }),
    __metadata("design:type", index_1.ModelCargoRegion)
], LoadingPoint.prototype, "region", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: GeoPoint }),
    __metadata("design:type", GeoPoint)
], LoadingPoint.prototype, "coordinates", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], LoadingPoint.prototype, "timeFrom", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], LoadingPoint.prototype, "timeTo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], LoadingPoint.prototype, "aroundTheClock", void 0);
let UnloadingPoint = class UnloadingPoint {
};
exports.UnloadingPoint = UnloadingPoint;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Types.ObjectId, ref: 'Country' }),
    __metadata("design:type", index_1.ModelCargoCountry)
], UnloadingPoint.prototype, "country", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Types.ObjectId, ref: 'Region' }),
    __metadata("design:type", index_1.ModelCargoRegion)
], UnloadingPoint.prototype, "region", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], UnloadingPoint.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: GeoPoint }),
    __metadata("design:type", GeoPoint)
], UnloadingPoint.prototype, "coordinates", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date }),
    __metadata("design:type", Date)
], UnloadingPoint.prototype, "date", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], UnloadingPoint.prototype, "timeFrom", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], UnloadingPoint.prototype, "timeTo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], UnloadingPoint.prototype, "isRange", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], UnloadingPoint.prototype, "aroundTheClock", void 0);
exports.UnloadingPoint = UnloadingPoint = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], UnloadingPoint);
let CargoWeight = class CargoWeight {
};
exports.CargoWeight = CargoWeight;
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    __metadata("design:type", Number)
], CargoWeight.prototype, "value", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: ['т', 'кг'], default: 'т' }),
    __metadata("design:type", String)
], CargoWeight.prototype, "unit", void 0);
exports.CargoWeight = CargoWeight = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], CargoWeight);
let ModelOffer = class ModelOffer {
};
exports.ModelOffer = ModelOffer;
__decorate([
    (0, mongoose_1.Prop)({ type: LoadingPoint }),
    __metadata("design:type", LoadingPoint)
], ModelOffer.prototype, "loading", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], ModelOffer.prototype, "partial", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: UnloadingPoint }),
    __metadata("design:type", UnloadingPoint)
], ModelOffer.prototype, "unloading", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: CargoWeight }),
    __metadata("design:type", CargoWeight)
], ModelOffer.prototype, "weight", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelOffer.prototype, "volume", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date }),
    __metadata("design:type", Date)
], ModelOffer.prototype, "readyDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Rate }),
    __metadata("design:type", Rate)
], ModelOffer.prototype, "rate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: PaymentTerms }),
    __metadata("design:type", PaymentTerms)
], ModelOffer.prototype, "paymentTerms", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Customer' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], ModelOffer.prototype, "owner", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Customer' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], ModelOffer.prototype, "receiver", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Cargo' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], ModelOffer.prototype, "cargo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Vehicle' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], ModelOffer.prototype, "vehicle", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], ModelOffer.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: true }),
    __metadata("design:type", Boolean)
], ModelOffer.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], ModelOffer.prototype, "isDeleted", void 0);
exports.ModelOffer = ModelOffer = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, collection: 'offer' })
], ModelOffer);
exports.ModelOfferSchema = mongoose_1.SchemaFactory.createForClass(ModelOffer);
