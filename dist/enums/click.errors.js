"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickTransactionState = exports.ClickAction = exports.ClickError = void 0;
var ClickError;
(function (ClickError) {
    ClickError[ClickError["Success"] = 0] = "Success";
    ClickError[ClickError["SignFailed"] = -1] = "SignFailed";
    ClickError[ClickError["InvalidAmount"] = -2] = "InvalidAmount";
    ClickError[ClickError["ActionNotFound"] = -3] = "ActionNotFound";
    ClickError[ClickError["AlreadyPaid"] = -4] = "AlreadyPaid";
    ClickError[ClickError["UserNotFound"] = -5] = "UserNotFound";
    ClickError[ClickError["TransactionNotFound"] = -6] = "TransactionNotFound";
    ClickError[ClickError["BadRequest"] = -8] = "BadRequest";
    ClickError[ClickError["TransactionCanceled"] = -9] = "TransactionCanceled";
})(ClickError || (exports.ClickError = ClickError = {}));
var ClickAction;
(function (ClickAction) {
    ClickAction[ClickAction["Prepare"] = 0] = "Prepare";
    ClickAction[ClickAction["Complete"] = 1] = "Complete";
})(ClickAction || (exports.ClickAction = ClickAction = {}));
var ClickTransactionState;
(function (ClickTransactionState) {
    ClickTransactionState[ClickTransactionState["Paid"] = 2] = "Paid";
    ClickTransactionState[ClickTransactionState["Pending"] = 1] = "Pending";
    ClickTransactionState[ClickTransactionState["PendingCanceled"] = -1] = "PendingCanceled";
    ClickTransactionState[ClickTransactionState["PaidCanceled"] = -2] = "PaidCanceled";
})(ClickTransactionState || (exports.ClickTransactionState = ClickTransactionState = {}));
