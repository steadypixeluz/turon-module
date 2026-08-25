"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerCompanyStage = exports.CustomerCompanyStatus = void 0;
var CustomerCompanyStatus;
(function (CustomerCompanyStatus) {
    CustomerCompanyStatus["new"] = "new";
    CustomerCompanyStatus["proccess"] = "proccess";
    CustomerCompanyStatus["confirmed"] = "confirmed";
    CustomerCompanyStatus["rejected"] = "rejected";
})(CustomerCompanyStatus || (exports.CustomerCompanyStatus = CustomerCompanyStatus = {}));
var CustomerCompanyStage;
(function (CustomerCompanyStage) {
    CustomerCompanyStage["StatusBasicAccount"] = "StatusBasicAccount";
    CustomerCompanyStage["StatusRegisteredCompany"] = "StatusRegisteredCompany";
    CustomerCompanyStage["StatusContactInfo"] = "StatusContactInfo";
    CustomerCompanyStage["StatusVerifiedBusiness"] = "StatusVerifiedBusiness";
    CustomerCompanyStage["StatusVerifiedBankAccount"] = "StatusVerifiedBankAccount";
    CustomerCompanyStage["StatusFactoryVerified"] = "StatusFactoryVerified";
    CustomerCompanyStage["StatusTrustedSupplier"] = "StatusTrustedSupplier";
})(CustomerCompanyStage || (exports.CustomerCompanyStage = CustomerCompanyStage = {}));
