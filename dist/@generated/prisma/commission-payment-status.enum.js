"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommissionPaymentStatus = void 0;
const graphql_1 = require("@nestjs/graphql");
var CommissionPaymentStatus;
(function (CommissionPaymentStatus) {
    CommissionPaymentStatus["PAID_OUT"] = "PAID_OUT";
    CommissionPaymentStatus["PENDING"] = "PENDING";
    CommissionPaymentStatus["REJECTED"] = "REJECTED";
})(CommissionPaymentStatus = exports.CommissionPaymentStatus || (exports.CommissionPaymentStatus = {}));
(0, graphql_1.registerEnumType)(CommissionPaymentStatus, { name: 'CommissionPaymentStatus', description: undefined });
//# sourceMappingURL=commission-payment-status.enum.js.map