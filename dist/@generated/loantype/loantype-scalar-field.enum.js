"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoantypeScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var LoantypeScalarFieldEnum;
(function (LoantypeScalarFieldEnum) {
    LoantypeScalarFieldEnum["id"] = "id";
    LoantypeScalarFieldEnum["name"] = "name";
    LoantypeScalarFieldEnum["weekDuration"] = "weekDuration";
    LoantypeScalarFieldEnum["rate"] = "rate";
    LoantypeScalarFieldEnum["overdueRate"] = "overdueRate";
    LoantypeScalarFieldEnum["createdAt"] = "createdAt";
    LoantypeScalarFieldEnum["updatedAt"] = "updatedAt";
})(LoantypeScalarFieldEnum = exports.LoantypeScalarFieldEnum || (exports.LoantypeScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(LoantypeScalarFieldEnum, { name: 'LoantypeScalarFieldEnum', description: undefined });
//# sourceMappingURL=loantype-scalar-field.enum.js.map