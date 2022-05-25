"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentState = void 0;
const graphql_1 = require("@nestjs/graphql");
var PaymentState;
(function (PaymentState) {
    PaymentState["PENDING"] = "PENDING";
    PaymentState["PAID_OUT"] = "PAID_OUT";
    PaymentState["PARTIALLY_PAID"] = "PARTIALLY_PAID";
})(PaymentState = exports.PaymentState || (exports.PaymentState = {}));
(0, graphql_1.registerEnumType)(PaymentState, { name: 'PaymentState', description: undefined });
//# sourceMappingURL=payment-state.enum.js.map