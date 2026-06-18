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
exports.VehicleSchema = exports.Vehicle = exports.Rate = exports.Route = exports.BodyDimensions = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importStar(require("mongoose"));
const cargo_schema_1 = require("../cargo/cargo.schema");
const cargo_country_1 = require("../cargo-country");
const cargo_region_1 = require("../cargo-region");
let BodyDimensions = class BodyDimensions {
};
exports.BodyDimensions = BodyDimensions;
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    __metadata("design:type", Number)
], BodyDimensions.prototype, "length", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    __metadata("design:type", Number)
], BodyDimensions.prototype, "width", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    __metadata("design:type", Number)
], BodyDimensions.prototype, "height", void 0);
exports.BodyDimensions = BodyDimensions = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], BodyDimensions);
let Route = class Route {
};
exports.Route = Route;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Types.ObjectId, ref: 'Country' }),
    __metadata("design:type", cargo_country_1.ModelCargoCountry)
], Route.prototype, "country", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Types.ObjectId, ref: 'Region' }),
    __metadata("design:type", cargo_region_1.ModelCargoRegion)
], Route.prototype, "region", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    __metadata("design:type", Number)
], Route.prototype, "radius", void 0);
exports.Route = Route = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], Route);
let Rate = class Rate {
};
exports.Rate = Rate;
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: ['negotiable', 'nonegotiable', 'request'],
        default: 'negotiable',
    }),
    __metadata("design:type", String)
], Rate.prototype, "mode", void 0);
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
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Number)
], Rate.prototype, "isRequestWithVat", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Number)
], Rate.prototype, "isRequestWithoutVat", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Number)
], Rate.prototype, "isRequestCash", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: 'UZS' }),
    __metadata("design:type", String)
], Rate.prototype, "currency", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], Rate.prototype, "byCard", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], Rate.prototype, "noNegotiation", void 0);
exports.Rate = Rate = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], Rate);
let Vehicle = class Vehicle {
};
exports.Vehicle = Vehicle;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Dictionary' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Vehicle.prototype, "bodyType", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Vehicle.prototype, "uuid", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: ['semi_trailer', 'truck', 'coupling'],
    }),
    __metadata("design:type", String)
], Vehicle.prototype, "vehicleCategory", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [mongoose_2.Types.ObjectId], ref: 'Dictionary', default: [] }),
    __metadata("design:type", Array)
], Vehicle.prototype, "loadingTypes", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    __metadata("design:type", Number)
], Vehicle.prototype, "bodyVolume", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: BodyDimensions }),
    __metadata("design:type", BodyDimensions)
], Vehicle.prototype, "bodyDimensions", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], Vehicle.prototype, "gpsMonitoring", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: ['readyDownload', 'constantly'],
        default: 'readyDownload',
    }),
    __metadata("design:type", String)
], Vehicle.prototype, "cargoType", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        // enum: ['workingDays', 'everyDay'],
    }),
    __metadata("design:type", String)
], Vehicle.prototype, "constantlyType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date }),
    __metadata("design:type", Date)
], Vehicle.prototype, "availableFrom", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 3 }),
    __metadata("design:type", Number)
], Vehicle.prototype, "archiveAfterDays", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    __metadata("design:type", Number)
], Vehicle.prototype, "capacityValue", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], Vehicle.prototype, "partialLoad", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], Vehicle.prototype, "dangerousGoods", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Route }),
    __metadata("design:type", Route)
], Vehicle.prototype, "loading", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Route }),
    __metadata("design:type", Route)
], Vehicle.prototype, "unloading", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Rate }),
    __metadata("design:type", Rate)
], Vehicle.prototype, "rate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: cargo_schema_1.Company }),
    __metadata("design:type", cargo_schema_1.Company)
], Vehicle.prototype, "customer", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: ['draft', 'active', 'archived', 'cancelled'],
        default: 'active',
    }),
    __metadata("design:type", String)
], Vehicle.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Customer' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Vehicle.prototype, "owner", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], Vehicle.prototype, "isDeleted", void 0);
exports.Vehicle = Vehicle = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, collection: 'vehicles' })
], Vehicle);
exports.VehicleSchema = mongoose_1.SchemaFactory.createForClass(Vehicle);
// ─── Indexes ──────────────────────────────────────────────────────────────────
exports.VehicleSchema.index({ status: 1 });
exports.VehicleSchema.index({ 'route.country': 1 });
exports.VehicleSchema.index({ 'route.region': 1 });
exports.VehicleSchema.index({ availableFrom: 1 });
exports.VehicleSchema.index({ owner: 1 });
exports.VehicleSchema.index({ vehicleCategory: 1 });
exports.VehicleSchema.index({ bodyType: 1 });
exports.VehicleSchema.index({ createdAt: -1 });
