"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const loan_state_enum_1 = require("../prisma/loan-state.enum");
const runtime_1 = require("@prisma/client/runtime");
const prisma_graphql_type_decimal_1 = require("prisma-graphql-type-decimal");
const loan_count_aggregate_output_1 = require("./loan-count-aggregate.output");
const loan_avg_aggregate_output_1 = require("./loan-avg-aggregate.output");
const loan_sum_aggregate_output_1 = require("./loan-sum-aggregate.output");
const loan_min_aggregate_output_1 = require("./loan-min-aggregate.output");
const loan_max_aggregate_output_1 = require("./loan-max-aggregate.output");
let LoanGroupBy = class LoanGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], LoanGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_state_enum_1.LoanState, { nullable: false }),
    __metadata("design:type", Object)
], LoanGroupBy.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: false }),
    __metadata("design:type", runtime_1.Decimal)
], LoanGroupBy.prototype, "weeklyPaymentAmount", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: false }),
    __metadata("design:type", runtime_1.Decimal)
], LoanGroupBy.prototype, "amountToPay", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], LoanGroupBy.prototype, "signDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], LoanGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], LoanGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], LoanGroupBy.prototype, "contractId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], LoanGroupBy.prototype, "loantypeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], LoanGroupBy.prototype, "employeeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_count_aggregate_output_1.LoanCountAggregate, { nullable: true }),
    __metadata("design:type", loan_count_aggregate_output_1.LoanCountAggregate)
], LoanGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_avg_aggregate_output_1.LoanAvgAggregate, { nullable: true }),
    __metadata("design:type", loan_avg_aggregate_output_1.LoanAvgAggregate)
], LoanGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_sum_aggregate_output_1.LoanSumAggregate, { nullable: true }),
    __metadata("design:type", loan_sum_aggregate_output_1.LoanSumAggregate)
], LoanGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_min_aggregate_output_1.LoanMinAggregate, { nullable: true }),
    __metadata("design:type", loan_min_aggregate_output_1.LoanMinAggregate)
], LoanGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_max_aggregate_output_1.LoanMaxAggregate, { nullable: true }),
    __metadata("design:type", loan_max_aggregate_output_1.LoanMaxAggregate)
], LoanGroupBy.prototype, "_max", void 0);
LoanGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], LoanGroupBy);
exports.LoanGroupBy = LoanGroupBy;
//# sourceMappingURL=loan-group-by.output.js.map