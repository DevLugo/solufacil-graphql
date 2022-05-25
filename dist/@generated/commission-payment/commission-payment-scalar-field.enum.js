"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommissionPaymentScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var CommissionPaymentScalarFieldEnum;
(function (CommissionPaymentScalarFieldEnum) {
    CommissionPaymentScalarFieldEnum["id"] = "id";
    CommissionPaymentScalarFieldEnum["amount"] = "amount";
    CommissionPaymentScalarFieldEnum["loanId"] = "loanId";
    CommissionPaymentScalarFieldEnum["paymentScheduleId"] = "paymentScheduleId";
    CommissionPaymentScalarFieldEnum["employeeId"] = "employeeId";
    CommissionPaymentScalarFieldEnum["status"] = "status";
})(CommissionPaymentScalarFieldEnum = exports.CommissionPaymentScalarFieldEnum || (exports.CommissionPaymentScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(CommissionPaymentScalarFieldEnum, { name: 'CommissionPaymentScalarFieldEnum', description: undefined });
//# sourceMappingURL=commission-payment-scalar-field.enum.js.map