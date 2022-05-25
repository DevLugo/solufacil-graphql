"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanPaymentScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var LoanPaymentScalarFieldEnum;
(function (LoanPaymentScalarFieldEnum) {
    LoanPaymentScalarFieldEnum["id"] = "id";
    LoanPaymentScalarFieldEnum["amount"] = "amount";
    LoanPaymentScalarFieldEnum["date"] = "date";
    LoanPaymentScalarFieldEnum["comments"] = "comments";
    LoanPaymentScalarFieldEnum["createdAt"] = "createdAt";
    LoanPaymentScalarFieldEnum["updatedAt"] = "updatedAt";
    LoanPaymentScalarFieldEnum["loanId"] = "loanId";
    LoanPaymentScalarFieldEnum["employeeId"] = "employeeId";
})(LoanPaymentScalarFieldEnum = exports.LoanPaymentScalarFieldEnum || (exports.LoanPaymentScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(LoanPaymentScalarFieldEnum, { name: 'LoanPaymentScalarFieldEnum', description: undefined });
//# sourceMappingURL=loan-payment-scalar-field.enum.js.map