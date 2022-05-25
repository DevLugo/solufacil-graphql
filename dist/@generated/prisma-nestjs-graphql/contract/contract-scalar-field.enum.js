"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var ContractScalarFieldEnum;
(function (ContractScalarFieldEnum) {
    ContractScalarFieldEnum["id"] = "id";
    ContractScalarFieldEnum["borrowerId"] = "borrowerId";
    ContractScalarFieldEnum["createdAt"] = "createdAt";
    ContractScalarFieldEnum["dueDate"] = "dueDate";
    ContractScalarFieldEnum["signDate"] = "signDate";
    ContractScalarFieldEnum["updatedAt"] = "updatedAt";
    ContractScalarFieldEnum["contractTypeId"] = "contractTypeId";
    ContractScalarFieldEnum["loanLeadId"] = "loanLeadId";
    ContractScalarFieldEnum["employeeId"] = "employeeId";
})(ContractScalarFieldEnum = exports.ContractScalarFieldEnum || (exports.ContractScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(ContractScalarFieldEnum, { name: 'ContractScalarFieldEnum', description: undefined });
//# sourceMappingURL=contract-scalar-field.enum.js.map