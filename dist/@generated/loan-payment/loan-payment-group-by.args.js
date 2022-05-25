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
exports.LoanPaymentGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const loan_payment_where_input_1 = require("./loan-payment-where.input");
const loan_payment_order_by_with_aggregation_input_1 = require("./loan-payment-order-by-with-aggregation.input");
const loan_payment_scalar_field_enum_1 = require("./loan-payment-scalar-field.enum");
const loan_payment_scalar_where_with_aggregates_input_1 = require("./loan-payment-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const loan_payment_count_aggregate_input_1 = require("./loan-payment-count-aggregate.input");
const loan_payment_avg_aggregate_input_1 = require("./loan-payment-avg-aggregate.input");
const loan_payment_sum_aggregate_input_1 = require("./loan-payment-sum-aggregate.input");
const loan_payment_min_aggregate_input_1 = require("./loan-payment-min-aggregate.input");
const loan_payment_max_aggregate_input_1 = require("./loan-payment-max-aggregate.input");
let LoanPaymentGroupByArgs = class LoanPaymentGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => loan_payment_where_input_1.LoanPaymentWhereInput, { nullable: true }),
    __metadata("design:type", loan_payment_where_input_1.LoanPaymentWhereInput)
], LoanPaymentGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_payment_order_by_with_aggregation_input_1.LoanPaymentOrderByWithAggregationInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanPaymentGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_payment_scalar_field_enum_1.LoanPaymentScalarFieldEnum], { nullable: false }),
    __metadata("design:type", Array)
], LoanPaymentGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_scalar_where_with_aggregates_input_1.LoanPaymentScalarWhereWithAggregatesInput, { nullable: true }),
    __metadata("design:type", loan_payment_scalar_where_with_aggregates_input_1.LoanPaymentScalarWhereWithAggregatesInput)
], LoanPaymentGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], LoanPaymentGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], LoanPaymentGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_count_aggregate_input_1.LoanPaymentCountAggregateInput, { nullable: true }),
    __metadata("design:type", loan_payment_count_aggregate_input_1.LoanPaymentCountAggregateInput)
], LoanPaymentGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_avg_aggregate_input_1.LoanPaymentAvgAggregateInput, { nullable: true }),
    __metadata("design:type", loan_payment_avg_aggregate_input_1.LoanPaymentAvgAggregateInput)
], LoanPaymentGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_sum_aggregate_input_1.LoanPaymentSumAggregateInput, { nullable: true }),
    __metadata("design:type", loan_payment_sum_aggregate_input_1.LoanPaymentSumAggregateInput)
], LoanPaymentGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_min_aggregate_input_1.LoanPaymentMinAggregateInput, { nullable: true }),
    __metadata("design:type", loan_payment_min_aggregate_input_1.LoanPaymentMinAggregateInput)
], LoanPaymentGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_max_aggregate_input_1.LoanPaymentMaxAggregateInput, { nullable: true }),
    __metadata("design:type", loan_payment_max_aggregate_input_1.LoanPaymentMaxAggregateInput)
], LoanPaymentGroupByArgs.prototype, "_max", void 0);
LoanPaymentGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], LoanPaymentGroupByArgs);
exports.LoanPaymentGroupByArgs = LoanPaymentGroupByArgs;
//# sourceMappingURL=loan-payment-group-by.args.js.map