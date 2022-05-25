"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var DocumentScalarFieldEnum;
(function (DocumentScalarFieldEnum) {
    DocumentScalarFieldEnum["id"] = "id";
    DocumentScalarFieldEnum["type"] = "type";
    DocumentScalarFieldEnum["borrowerId"] = "borrowerId";
    DocumentScalarFieldEnum["avalId"] = "avalId";
    DocumentScalarFieldEnum["contractId"] = "contractId";
    DocumentScalarFieldEnum["employeeId"] = "employeeId";
})(DocumentScalarFieldEnum = exports.DocumentScalarFieldEnum || (exports.DocumentScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(DocumentScalarFieldEnum, { name: 'DocumentScalarFieldEnum', description: undefined });
//# sourceMappingURL=document-scalar-field.enum.js.map