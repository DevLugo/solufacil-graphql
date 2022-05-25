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
exports.LoanPaymentAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const loan_payment_where_input_1 = require("./loan-payment-where.input");
const loan_payment_order_by_with_relation_input_1 = require("./loan-payment-order-by-with-relation.input");
const loan_payment_where_unique_input_1 = require("./loan-payment-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const loan_payment_count_aggregate_input_1 = require("./loan-payment-count-aggregate.input");
const loan_payment_avg_aggregate_input_1 = require("./loan-payment-avg-aggregate.input");
const loan_payment_sum_aggregate_input_1 = require("./loan-payment-sum-aggregate.input");
const loan_payment_min_aggregate_input_1 = require("./loan-payment-min-aggregate.input");
const loan_payment_max_aggregate_input_1 = require("./loan-payment-max-aggregate.input");
let LoanPaymentAggregateArgs = class LoanPaymentAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => loan_payment_where_input_1.LoanPaymentWhereInput, { nullable: true }),
    __metadata("design:type", loan_payment_where_input_1.LoanPaymentWhereInput)
], LoanPaymentAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_payment_order_by_with_relation_input_1.LoanPaymentOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanPaymentAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_where_unique_input_1.LoanPaymentWhereUniqueInput, { nullable: true }),
    __metadata("design:type", loan_payment_where_unique_input_1.LoanPaymentWhereUniqueInput)
], LoanPaymentAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], LoanPaymentAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], LoanPaymentAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_count_aggregate_input_1.LoanPaymentCountAggregateInput, { nullable: true }),
    __metadata("design:type", loan_payment_count_aggregate_input_1.LoanPaymentCountAggregateInput)
], LoanPaymentAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_avg_aggregate_input_1.LoanPaymentAvgAggregateInput, { nullable: true }),
    __metadata("design:type", loan_payment_avg_aggregate_input_1.LoanPaymentAvgAggregateInput)
], LoanPaymentAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_sum_aggregate_input_1.LoanPaymentSumAggregateInput, { nullable: true }),
    __metadata("design:type", loan_payment_sum_aggregate_input_1.LoanPaymentSumAggregateInput)
], LoanPaymentAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_min_aggregate_input_1.LoanPaymentMinAggregateInput, { nullable: true }),
    __metadata("design:type", loan_payment_min_aggregate_input_1.LoanPaymentMinAggregateInput)
], LoanPaymentAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_max_aggregate_input_1.LoanPaymentMaxAggregateInput, { nullable: true }),
    __metadata("design:type", loan_payment_max_aggregate_input_1.LoanPaymentMaxAggregateInput)
], LoanPaymentAggregateArgs.prototype, "_max", void 0);
LoanPaymentAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], LoanPaymentAggregateArgs);
exports.LoanPaymentAggregateArgs = LoanPaymentAggregateArgs;
//# sourceMappingURL=loan-payment-aggregate.args.js.map