"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var LogScalarFieldEnum;
(function (LogScalarFieldEnum) {
    LogScalarFieldEnum["id"] = "id";
    LogScalarFieldEnum["requestBody"] = "requestBody";
    LogScalarFieldEnum["requestType"] = "requestType";
    LogScalarFieldEnum["deviceType"] = "deviceType";
    LogScalarFieldEnum["createdAt"] = "createdAt";
    LogScalarFieldEnum["updatedAt"] = "updatedAt";
    LogScalarFieldEnum["systemSectionId"] = "systemSectionId";
})(LogScalarFieldEnum = exports.LogScalarFieldEnum || (exports.LogScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(LogScalarFieldEnum, { name: 'LogScalarFieldEnum', description: undefined });
//# sourceMappingURL=log-scalar-field.enum.js.map