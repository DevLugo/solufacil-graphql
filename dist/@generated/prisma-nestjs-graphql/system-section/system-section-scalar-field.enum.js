"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemSectionScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var SystemSectionScalarFieldEnum;
(function (SystemSectionScalarFieldEnum) {
    SystemSectionScalarFieldEnum["id"] = "id";
    SystemSectionScalarFieldEnum["name"] = "name";
    SystemSectionScalarFieldEnum["createdAt"] = "createdAt";
    SystemSectionScalarFieldEnum["updatedAt"] = "updatedAt";
})(SystemSectionScalarFieldEnum = exports.SystemSectionScalarFieldEnum || (exports.SystemSectionScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(SystemSectionScalarFieldEnum, { name: 'SystemSectionScalarFieldEnum', description: undefined });
//# sourceMappingURL=system-section-scalar-field.enum.js.map