"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var EmployeeScalarFieldEnum;
(function (EmployeeScalarFieldEnum) {
    EmployeeScalarFieldEnum["id"] = "id";
    EmployeeScalarFieldEnum["type"] = "type";
    EmployeeScalarFieldEnum["createdAt"] = "createdAt";
    EmployeeScalarFieldEnum["updatedAt"] = "updatedAt";
    EmployeeScalarFieldEnum["userId"] = "userId";
})(EmployeeScalarFieldEnum = exports.EmployeeScalarFieldEnum || (exports.EmployeeScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(EmployeeScalarFieldEnum, { name: 'EmployeeScalarFieldEnum', description: undefined });
//# sourceMappingURL=employee-scalar-field.enum.js.map