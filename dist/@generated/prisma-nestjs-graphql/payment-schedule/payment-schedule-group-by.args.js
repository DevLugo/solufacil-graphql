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
exports.PaymentScheduleGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const payment_schedule_where_input_1 = require("./payment-schedule-where.input");
const payment_schedule_order_by_with_aggregation_input_1 = require("./payment-schedule-order-by-with-aggregation.input");
const payment_schedule_scalar_field_enum_1 = require("./payment-schedule-scalar-field.enum");
const payment_schedule_scalar_where_with_aggregates_input_1 = require("./payment-schedule-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const payment_schedule_count_aggregate_input_1 = require("./payment-schedule-count-aggregate.input");
const payment_schedule_avg_aggregate_input_1 = require("./payment-schedule-avg-aggregate.input");
const payment_schedule_sum_aggregate_input_1 = require("./payment-schedule-sum-aggregate.input");
const payment_schedule_min_aggregate_input_1 = require("./payment-schedule-min-aggregate.input");
const payment_schedule_max_aggregate_input_1 = require("./payment-schedule-max-aggregate.input");
let PaymentScheduleGroupByArgs = class PaymentScheduleGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_where_input_1.PaymentScheduleWhereInput, { nullable: true }),
    __metadata("design:type", payment_schedule_where_input_1.PaymentScheduleWhereInput)
], PaymentScheduleGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [payment_schedule_order_by_with_aggregation_input_1.PaymentScheduleOrderByWithAggregationInput], { nullable: true }),
    __metadata("design:type", Array)
], PaymentScheduleGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [payment_schedule_scalar_field_enum_1.PaymentScheduleScalarFieldEnum], { nullable: false }),
    __metadata("design:type", Array)
], PaymentScheduleGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_scalar_where_with_aggregates_input_1.PaymentScheduleScalarWhereWithAggregatesInput, { nullable: true }),
    __metadata("design:type", payment_schedule_scalar_where_with_aggregates_input_1.PaymentScheduleScalarWhereWithAggregatesInput)
], PaymentScheduleGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], PaymentScheduleGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], PaymentScheduleGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_count_aggregate_input_1.PaymentScheduleCountAggregateInput, { nullable: true }),
    __metadata("design:type", payment_schedule_count_aggregate_input_1.PaymentScheduleCountAggregateInput)
], PaymentScheduleGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_avg_aggregate_input_1.PaymentScheduleAvgAggregateInput, { nullable: true }),
    __metadata("design:type", payment_schedule_avg_aggregate_input_1.PaymentScheduleAvgAggregateInput)
], PaymentScheduleGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_sum_aggregate_input_1.PaymentScheduleSumAggregateInput, { nullable: true }),
    __metadata("design:type", payment_schedule_sum_aggregate_input_1.PaymentScheduleSumAggregateInput)
], PaymentScheduleGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_min_aggregate_input_1.PaymentScheduleMinAggregateInput, { nullable: true }),
    __metadata("design:type", payment_schedule_min_aggregate_input_1.PaymentScheduleMinAggregateInput)
], PaymentScheduleGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_max_aggregate_input_1.PaymentScheduleMaxAggregateInput, { nullable: true }),
    __metadata("design:type", payment_schedule_max_aggregate_input_1.PaymentScheduleMaxAggregateInput)
], PaymentScheduleGroupByArgs.prototype, "_max", void 0);
PaymentScheduleGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], PaymentScheduleGroupByArgs);
exports.PaymentScheduleGroupByArgs = PaymentScheduleGroupByArgs;
//# sourceMappingURL=payment-schedule-group-by.args.js.map