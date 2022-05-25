"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanState = void 0;
const graphql_1 = require("@nestjs/graphql");
var LoanState;
(function (LoanState) {
    LoanState["REQUESTED"] = "REQUESTED";
    LoanState["IN_REVIEW"] = "IN_REVIEW";
    LoanState["APPROVED"] = "APPROVED";
    LoanState["REJECTED"] = "REJECTED";
    LoanState["PAID_OUT"] = "PAID_OUT";
    LoanState["POSTPONED"] = "POSTPONED";
})(LoanState = exports.LoanState || (exports.LoanState = {}));
(0, graphql_1.registerEnumType)(LoanState, { name: 'LoanState', description: undefined });
//# sourceMappingURL=loan-state.enum.js.map