"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommissionType = void 0;
const graphql_1 = require("@nestjs/graphql");
var CommissionType;
(function (CommissionType) {
    CommissionType["FIXED_AMOUNT"] = "FIXED_AMOUNT";
    CommissionType["PERCENTAGE"] = "PERCENTAGE";
})(CommissionType = exports.CommissionType || (exports.CommissionType = {}));
(0, graphql_1.registerEnumType)(CommissionType, { name: 'CommissionType', description: undefined });
//# sourceMappingURL=commission-type.enum.js.map