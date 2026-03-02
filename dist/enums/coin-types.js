"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoinHistoryInReason = exports.CoinHistoryType = void 0;
var CoinHistoryType;
(function (CoinHistoryType) {
    CoinHistoryType["IN"] = "IN";
    CoinHistoryType["OUT"] = "OUT";
})(CoinHistoryType || (exports.CoinHistoryType = CoinHistoryType = {}));
var CoinHistoryInReason;
(function (CoinHistoryInReason) {
    CoinHistoryInReason["PURCHASE"] = "purchase";
    CoinHistoryInReason["REFERRER"] = "referrer";
    CoinHistoryInReason["DONATION"] = "donation";
    CoinHistoryInReason["REGISTER"] = "register";
    CoinHistoryInReason["GIFT"] = "gift";
    CoinHistoryInReason["GIFT_PRODUCT"] = "gift_product";
})(CoinHistoryInReason || (exports.CoinHistoryInReason = CoinHistoryInReason = {}));
