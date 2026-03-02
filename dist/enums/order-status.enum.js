"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderProductStatus = exports.OrderWholesaleStatus = exports.OrderInfoStatus = exports.OrderStatus = void 0;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["draft"] = "draft";
    OrderStatus["new"] = "new";
    OrderStatus["preparing"] = "preparing";
    OrderStatus["shipped"] = "shipped";
    OrderStatus["arrived_pvz"] = "arrived_pvz";
    OrderStatus["courier_on_way"] = "courier_on_way";
    OrderStatus["delivered"] = "delivered";
    OrderStatus["returned"] = "returned";
    OrderStatus["cancelled"] = "cancelled";
})(OrderStatus || (exports.OrderStatus = OrderStatus = {}));
var OrderInfoStatus;
(function (OrderInfoStatus) {
    OrderInfoStatus["draft"] = "draft";
    OrderInfoStatus["completed"] = "completed";
})(OrderInfoStatus || (exports.OrderInfoStatus = OrderInfoStatus = {}));
var OrderWholesaleStatus;
(function (OrderWholesaleStatus) {
    OrderWholesaleStatus["draft"] = "draft";
    OrderWholesaleStatus["new"] = "new";
    OrderWholesaleStatus["cancelled"] = "rejected";
    OrderWholesaleStatus["completed"] = "completed";
})(OrderWholesaleStatus || (exports.OrderWholesaleStatus = OrderWholesaleStatus = {}));
var OrderProductStatus;
(function (OrderProductStatus) {
    OrderProductStatus["draft"] = "draft";
    OrderProductStatus["new"] = "new";
    OrderProductStatus["cancelled"] = "cancelled";
    OrderProductStatus["completed"] = "completed";
    OrderProductStatus["payment_pending"] = "payment_pending";
})(OrderProductStatus || (exports.OrderProductStatus = OrderProductStatus = {}));
