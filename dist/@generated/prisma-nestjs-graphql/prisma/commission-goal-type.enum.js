"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommissionGoalType = void 0;
const graphql_1 = require("@nestjs/graphql");
var CommissionGoalType;
(function (CommissionGoalType) {
    CommissionGoalType["NEW_LOAN"] = "NEW_LOAN";
    CommissionGoalType["PAYMENT_RECEIVED"] = "PAYMENT_RECEIVED";
})(CommissionGoalType = exports.CommissionGoalType || (exports.CommissionGoalType = {}));
(0, graphql_1.registerEnumType)(CommissionGoalType, { name: 'CommissionGoalType', description: undefined });
//# sourceMappingURL=commission-goal-type.enum.js.map