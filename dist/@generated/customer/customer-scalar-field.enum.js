"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var CustomerScalarFieldEnum;
(function (CustomerScalarFieldEnum) {
    CustomerScalarFieldEnum["id"] = "id";
    CustomerScalarFieldEnum["name"] = "name";
    CustomerScalarFieldEnum["logo"] = "logo";
    CustomerScalarFieldEnum["url"] = "url";
    CustomerScalarFieldEnum["createdAt"] = "createdAt";
    CustomerScalarFieldEnum["updatedAt"] = "updatedAt";
})(CustomerScalarFieldEnum = exports.CustomerScalarFieldEnum || (exports.CustomerScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(CustomerScalarFieldEnum, { name: 'CustomerScalarFieldEnum', description: undefined });
//# sourceMappingURL=customer-scalar-field.enum.js.map