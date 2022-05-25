"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var LoanScalarFieldEnum;
(function (LoanScalarFieldEnum) {
    LoanScalarFieldEnum["id"] = "id";
    LoanScalarFieldEnum["status"] = "status";
    LoanScalarFieldEnum["weeklyPaymentAmount"] = "weeklyPaymentAmount";
    LoanScalarFieldEnum["amountToPay"] = "amountToPay";
    LoanScalarFieldEnum["signDate"] = "signDate";
    LoanScalarFieldEnum["createdAt"] = "createdAt";
    LoanScalarFieldEnum["updatedAt"] = "updatedAt";
    LoanScalarFieldEnum["contractId"] = "contractId";
    LoanScalarFieldEnum["loantypeId"] = "loantypeId";
    LoanScalarFieldEnum["employeeId"] = "employeeId";
})(LoanScalarFieldEnum = exports.LoanScalarFieldEnum || (exports.LoanScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(LoanScalarFieldEnum, { name: 'LoanScalarFieldEnum', description: undefined });
//# sourceMappingURL=loan-scalar-field.enum.js.map