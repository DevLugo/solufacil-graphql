"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvalScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var AvalScalarFieldEnum;
(function (AvalScalarFieldEnum) {
    AvalScalarFieldEnum["id"] = "id";
    AvalScalarFieldEnum["email"] = "email";
    AvalScalarFieldEnum["fullName"] = "fullName";
    AvalScalarFieldEnum["firstName"] = "firstName";
    AvalScalarFieldEnum["lastName"] = "lastName";
    AvalScalarFieldEnum["createdAt"] = "createdAt";
    AvalScalarFieldEnum["updatedAt"] = "updatedAt";
})(AvalScalarFieldEnum = exports.AvalScalarFieldEnum || (exports.AvalScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(AvalScalarFieldEnum, { name: 'AvalScalarFieldEnum', description: undefined });
//# sourceMappingURL=aval-scalar-field.enum.js.map