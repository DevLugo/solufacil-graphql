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
exports.CommissionPaymentGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const commission_payment_where_input_1 = require("./commission-payment-where.input");
const commission_payment_order_by_with_aggregation_input_1 = require("./commission-payment-order-by-with-aggregation.input");
const commission_payment_scalar_field_enum_1 = require("./commission-payment-scalar-field.enum");
const commission_payment_scalar_where_with_aggregates_input_1 = require("./commission-payment-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const commission_payment_count_aggregate_input_1 = require("./commission-payment-count-aggregate.input");
const commission_payment_avg_aggregate_input_1 = require("./commission-payment-avg-aggregate.input");
const commission_payment_sum_aggregate_input_1 = require("./commission-payment-sum-aggregate.input");
const commission_payment_min_aggregate_input_1 = require("./commission-payment-min-aggregate.input");
const commission_payment_max_aggregate_input_1 = require("./commission-payment-max-aggregate.input");
let CommissionPaymentGroupByArgs = class CommissionPaymentGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => commission_payment_where_input_1.CommissionPaymentWhereInput, { nullable: true }),
    __metadata("design:type", commission_payment_where_input_1.CommissionPaymentWhereInput)
], CommissionPaymentGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [commission_payment_order_by_with_aggregation_input_1.CommissionPaymentOrderByWithAggregationInput], { nullable: true }),
    __metadata("design:type", Array)
], CommissionPaymentGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [commission_payment_scalar_field_enum_1.CommissionPaymentScalarFieldEnum], { nullable: false }),
    __metadata("design:type", Array)
], CommissionPaymentGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_scalar_where_with_aggregates_input_1.CommissionPaymentScalarWhereWithAggregatesInput, { nullable: true }),
    __metadata("design:type", commission_payment_scalar_where_with_aggregates_input_1.CommissionPaymentScalarWhereWithAggregatesInput)
], CommissionPaymentGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], CommissionPaymentGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], CommissionPaymentGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_count_aggregate_input_1.CommissionPaymentCountAggregateInput, { nullable: true }),
    __metadata("design:type", commission_payment_count_aggregate_input_1.CommissionPaymentCountAggregateInput)
], CommissionPaymentGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_avg_aggregate_input_1.CommissionPaymentAvgAggregateInput, { nullable: true }),
    __metadata("design:type", commission_payment_avg_aggregate_input_1.CommissionPaymentAvgAggregateInput)
], CommissionPaymentGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_sum_aggregate_input_1.CommissionPaymentSumAggregateInput, { nullable: true }),
    __metadata("design:type", commission_payment_sum_aggregate_input_1.CommissionPaymentSumAggregateInput)
], CommissionPaymentGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_min_aggregate_input_1.CommissionPaymentMinAggregateInput, { nullable: true }),
    __metadata("design:type", commission_payment_min_aggregate_input_1.CommissionPaymentMinAggregateInput)
], CommissionPaymentGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_max_aggregate_input_1.CommissionPaymentMaxAggregateInput, { nullable: true }),
    __metadata("design:type", commission_payment_max_aggregate_input_1.CommissionPaymentMaxAggregateInput)
], CommissionPaymentGroupByArgs.prototype, "_max", void 0);
CommissionPaymentGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], CommissionPaymentGroupByArgs);
exports.CommissionPaymentGroupByArgs = CommissionPaymentGroupByArgs;
//# sourceMappingURL=commission-payment-group-by.args.js.map