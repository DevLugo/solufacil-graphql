"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var PhoneScalarFieldEnum;
(function (PhoneScalarFieldEnum) {
    PhoneScalarFieldEnum["id"] = "id";
    PhoneScalarFieldEnum["number"] = "number";
    PhoneScalarFieldEnum["borrowerId"] = "borrowerId";
    PhoneScalarFieldEnum["createdAt"] = "createdAt";
    PhoneScalarFieldEnum["updatedAt"] = "updatedAt";
    PhoneScalarFieldEnum["avalId"] = "avalId";
    PhoneScalarFieldEnum["employeeId"] = "employeeId";
})(PhoneScalarFieldEnum = exports.PhoneScalarFieldEnum || (exports.PhoneScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(PhoneScalarFieldEnum, { name: 'PhoneScalarFieldEnum', description: undefined });
//# sourceMappingURL=phone-scalar-field.enum.js.map