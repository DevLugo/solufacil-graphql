"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowerScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var BorrowerScalarFieldEnum;
(function (BorrowerScalarFieldEnum) {
    BorrowerScalarFieldEnum["id"] = "id";
    BorrowerScalarFieldEnum["name"] = "name";
    BorrowerScalarFieldEnum["address"] = "address";
    BorrowerScalarFieldEnum["email"] = "email";
    BorrowerScalarFieldEnum["createdAt"] = "createdAt";
    BorrowerScalarFieldEnum["updatedAt"] = "updatedAt";
})(BorrowerScalarFieldEnum = exports.BorrowerScalarFieldEnum || (exports.BorrowerScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(BorrowerScalarFieldEnum, { name: 'BorrowerScalarFieldEnum', description: undefined });
//# sourceMappingURL=borrower-scalar-field.enum.js.map