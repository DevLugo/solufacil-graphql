"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpensesScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var ExpensesScalarFieldEnum;
(function (ExpensesScalarFieldEnum) {
    ExpensesScalarFieldEnum["id"] = "id";
    ExpensesScalarFieldEnum["amountToPay"] = "amountToPay";
    ExpensesScalarFieldEnum["status"] = "status";
    ExpensesScalarFieldEnum["dueDate"] = "dueDate";
    ExpensesScalarFieldEnum["payedAt"] = "payedAt";
    ExpensesScalarFieldEnum["createdAt"] = "createdAt";
    ExpensesScalarFieldEnum["updatedAt"] = "updatedAt";
    ExpensesScalarFieldEnum["userId"] = "userId";
    ExpensesScalarFieldEnum["employeeId"] = "employeeId";
})(ExpensesScalarFieldEnum = exports.ExpensesScalarFieldEnum || (exports.ExpensesScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(ExpensesScalarFieldEnum, { name: 'ExpensesScalarFieldEnum', description: undefined });
//# sourceMappingURL=expenses-scalar-field.enum.js.map