"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentScheduleScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var PaymentScheduleScalarFieldEnum;
(function (PaymentScheduleScalarFieldEnum) {
    PaymentScheduleScalarFieldEnum["id"] = "id";
    PaymentScheduleScalarFieldEnum["numeration"] = "numeration";
    PaymentScheduleScalarFieldEnum["amountToPay"] = "amountToPay";
    PaymentScheduleScalarFieldEnum["paidAmount"] = "paidAmount";
    PaymentScheduleScalarFieldEnum["returnToCapital"] = "returnToCapital";
    PaymentScheduleScalarFieldEnum["profit"] = "profit";
    PaymentScheduleScalarFieldEnum["status"] = "status";
    PaymentScheduleScalarFieldEnum["delayed"] = "delayed";
    PaymentScheduleScalarFieldEnum["dueDate"] = "dueDate";
    PaymentScheduleScalarFieldEnum["details"] = "details";
    PaymentScheduleScalarFieldEnum["createdAt"] = "createdAt";
    PaymentScheduleScalarFieldEnum["updatedAt"] = "updatedAt";
    PaymentScheduleScalarFieldEnum["loanId"] = "loanId";
})(PaymentScheduleScalarFieldEnum = exports.PaymentScheduleScalarFieldEnum || (exports.PaymentScheduleScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(PaymentScheduleScalarFieldEnum, { name: 'PaymentScheduleScalarFieldEnum', description: undefined });
//# sourceMappingURL=payment-schedule-scalar-field.enum.js.map