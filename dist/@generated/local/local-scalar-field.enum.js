"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var LocalScalarFieldEnum;
(function (LocalScalarFieldEnum) {
    LocalScalarFieldEnum["id"] = "id";
    LocalScalarFieldEnum["name"] = "name";
    LocalScalarFieldEnum["address"] = "address";
    LocalScalarFieldEnum["createdAt"] = "createdAt";
    LocalScalarFieldEnum["updatedAt"] = "updatedAt";
    LocalScalarFieldEnum["borrowerId"] = "borrowerId";
})(LocalScalarFieldEnum = exports.LocalScalarFieldEnum || (exports.LocalScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(LocalScalarFieldEnum, { name: 'LocalScalarFieldEnum', description: undefined });
//# sourceMappingURL=local-scalar-field.enum.js.map