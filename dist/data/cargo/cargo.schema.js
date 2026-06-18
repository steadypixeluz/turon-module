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
exports.ModelCargoSchema = exports.ModelCargo = exports.Company = exports.Transport = exports.Payment = exports.CargoWeight = exports.UnloadingPoint = exports.LoadingPoint = exports.GeoPoint = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importStar(require("mongoose"));
const cargo_country_1 = require("../cargo-country");
const cargo_region_1 = require("../cargo-region");
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
    __metadata("design:type", cargo_country_1.ModelCargoCountry)
], LoadingPoint.prototype, "country", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Types.ObjectId, ref: 'Region' }),
    __metadata("design:type", cargo_region_1.ModelCargoRegion)
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
    __metadata("design:type", cargo_country_1.ModelCargoCountry)
], UnloadingPoint.prototype, "country", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Types.ObjectId, ref: 'Region' }),
    __metadata("design:type", cargo_region_1.ModelCargoRegion)
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
// stafka bu shopir beriydigon narhni kutadi shopir shu opsiyalar boyicha narh bera oladi
let Payment = class Payment {
};
exports.Payment = Payment;
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: ['negotiable', 'nonegotiable', 'request'],
        default: 'negotiable',
    }),
    __metadata("design:type", String)
], Payment.prototype, "mode", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], Payment.prototype, "priceWithVat", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], Payment.prototype, "priceWithoutVat", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], Payment.prototype, "priceCash", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Number)
], Payment.prototype, "isRequestWithVat", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Number)
], Payment.prototype, "isRequestWithoutVat", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Number)
], Payment.prototype, "isRequestCash", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: 'UZS' }),
    __metadata("design:type", String)
], Payment.prototype, "currency", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], Payment.prototype, "byCard", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], Payment.prototype, "offersVisibleOnlyToYou", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    __metadata("design:type", Number)
], Payment.prototype, "paymentDays", void 0);
exports.Payment = Payment = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], Payment);
let Transport = class Transport {
};
exports.Transport = Transport;
__decorate([
    (0, mongoose_1.Prop)({ type: [mongoose_2.Types.ObjectId], ref: 'Dictionary', default: [] }),
    __metadata("design:type", Array)
], Transport.prototype, "bodyTypes", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [mongoose_2.Types.ObjectId], ref: 'Dictionary', default: [] }),
    __metadata("design:type", Array)
], Transport.prototype, "loadingTypes", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [mongoose_2.Types.ObjectId], ref: 'Dictionary', default: [] }),
    __metadata("design:type", Array)
], Transport.prototype, "unloadingTypes", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], Transport.prototype, "loadingConsiderAll", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], Transport.prototype, "unloadingConsiderAll", void 0);
exports.Transport = Transport = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], Transport);
let Company = class Company {
};
exports.Company = Company;
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: ['legal', 'individual'],
    }),
    __metadata("design:type", String)
], Company.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Company.prototype, "company", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Types.ObjectId, ref: 'Country' }),
    __metadata("design:type", cargo_country_1.ModelCargoCountry)
], Company.prototype, "country", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Types.ObjectId, ref: 'Region' }),
    __metadata("design:type", cargo_region_1.ModelCargoRegion)
], Company.prototype, "region", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Company.prototype, "note", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Company.prototype, "contactPerson", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Company.prototype, "phone", void 0);
exports.Company = Company = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], Company);
let ModelCargo = class ModelCargo {
};
exports.ModelCargo = ModelCargo;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], ModelCargo.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: LoadingPoint }),
    __metadata("design:type", LoadingPoint)
], ModelCargo.prototype, "loading", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: UnloadingPoint }),
    __metadata("design:type", UnloadingPoint)
], ModelCargo.prototype, "unloading", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: CargoWeight }),
    __metadata("design:type", CargoWeight)
], ModelCargo.prototype, "weight", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: ['all', 'alone', 'partial'],
    }),
    __metadata("design:type", String)
], ModelCargo.prototype, "partialLoad", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelCargo.prototype, "volume", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: ['readyDownload', 'constantly', 'noCargo'],
    }),
    __metadata("design:type", String)
], ModelCargo.prototype, "cargoType", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: ['workingDays', 'everyDay'],
    }),
    __metadata("design:type", String)
], ModelCargo.prototype, "constantlyType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date }),
    __metadata("design:type", Date)
], ModelCargo.prototype, "readyDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 3 }),
    __metadata("design:type", Number)
], ModelCargo.prototype, "archiveAfterDays", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Transport }),
    __metadata("design:type", Transport)
], ModelCargo.prototype, "transport", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Payment }),
    __metadata("design:type", Payment)
], ModelCargo.prototype, "payment", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Company }),
    __metadata("design:type", Company)
], ModelCargo.prototype, "customer", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: ['draft', 'active', 'archived', 'cancelled'],
        default: 'active',
    }),
    __metadata("design:type", String)
], ModelCargo.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelCargo.prototype, "uuid", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Customer' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], ModelCargo.prototype, "owner", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], ModelCargo.prototype, "isDeleted", void 0);
exports.ModelCargo = ModelCargo = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, collection: 'cargos' })
], ModelCargo);
exports.ModelCargoSchema = mongoose_1.SchemaFactory.createForClass(ModelCargo);
// ─── Indexes ─────────────────────────────────────────────────────────────────
exports.ModelCargoSchema.index({
    status: 1,
    isDeleted: 1,
    createdAt: -1,
});
exports.ModelCargoSchema.index({
    'loading.country': 1,
    'loading.region': 1,
    'unloading.country': 1,
    'unloading.region': 1,
});
exports.ModelCargoSchema.index({
    'weight.value': 1,
});
exports.ModelCargoSchema.index({
    'volume.value': 1,
});
exports.ModelCargoSchema.index({
    'transport.bodyTypes': 1,
});
exports.ModelCargoSchema.index({
    readyDate: 1,
});
exports.ModelCargoSchema.index({
    'loading.coordinates': '2dsphere',
});
exports.ModelCargoSchema.index({
    'unloading.coordinates': '2dsphere',
});
