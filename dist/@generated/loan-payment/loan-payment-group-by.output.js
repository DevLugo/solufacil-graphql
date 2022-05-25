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
exports.LoanPaymentGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const runtime_1 = require("@prisma/client/runtime");
const prisma_graphql_type_decimal_1 = require("prisma-graphql-type-decimal");
const loan_payment_count_aggregate_output_1 = require("./loan-payment-count-aggregate.output");
const loan_payment_avg_aggregate_output_1 = require("./loan-payment-avg-aggregate.output");
const loan_payment_sum_aggregate_output_1 = require("./loan-payment-sum-aggregate.output");
const loan_payment_min_aggregate_output_1 = require("./loan-payment-min-aggregate.output");
const loan_payment_max_aggregate_output_1 = require("./loan-payment-max-aggregate.output");
let LoanPaymentGroupBy = class LoanPaymentGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], LoanPaymentGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: false }),
    __metadata("design:type", runtime_1.Decimal)
], LoanPaymentGroupBy.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], LoanPaymentGroupBy.prototype, "date", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], LoanPaymentGroupBy.prototype, "comments", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], LoanPaymentGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], LoanPaymentGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], LoanPaymentGroupBy.prototype, "loanId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], LoanPaymentGroupBy.prototype, "employeeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_count_aggregate_output_1.LoanPaymentCountAggregate, { nullable: true }),
    __metadata("design:type", loan_payment_count_aggregate_output_1.LoanPaymentCountAggregate)
], LoanPaymentGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_avg_aggregate_output_1.LoanPaymentAvgAggregate, { nullable: true }),
    __metadata("design:type", loan_payment_avg_aggregate_output_1.LoanPaymentAvgAggregate)
], LoanPaymentGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_sum_aggregate_output_1.LoanPaymentSumAggregate, { nullable: true }),
    __metadata("design:type", loan_payment_sum_aggregate_output_1.LoanPaymentSumAggregate)
], LoanPaymentGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_min_aggregate_output_1.LoanPaymentMinAggregate, { nullable: true }),
    __metadata("design:type", loan_payment_min_aggregate_output_1.LoanPaymentMinAggregate)
], LoanPaymentGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_max_aggregate_output_1.LoanPaymentMaxAggregate, { nullable: true }),
    __metadata("design:type", loan_payment_max_aggregate_output_1.LoanPaymentMaxAggregate)
], LoanPaymentGroupBy.prototype, "_max", void 0);
LoanPaymentGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], LoanPaymentGroupBy);
exports.LoanPaymentGroupBy = LoanPaymentGroupBy;
//# sourceMappingURL=loan-payment-group-by.output.js.map