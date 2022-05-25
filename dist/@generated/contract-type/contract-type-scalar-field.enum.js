"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractTypeScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var ContractTypeScalarFieldEnum;
(function (ContractTypeScalarFieldEnum) {
    ContractTypeScalarFieldEnum["id"] = "id";
    ContractTypeScalarFieldEnum["name"] = "name";
    ContractTypeScalarFieldEnum["monthDuration"] = "monthDuration";
    ContractTypeScalarFieldEnum["amount"] = "amount";
    ContractTypeScalarFieldEnum["maxRate"] = "maxRate";
    ContractTypeScalarFieldEnum["createdAt"] = "createdAt";
    ContractTypeScalarFieldEnum["updatedAt"] = "updatedAt";
})(ContractTypeScalarFieldEnum = exports.ContractTypeScalarFieldEnum || (exports.ContractTypeScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(ContractTypeScalarFieldEnum, { name: 'ContractTypeScalarFieldEnum', description: undefined });
//# sourceMappingURL=contract-type-scalar-field.enum.js.map