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
exports.PaymentScheduleAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const payment_schedule_where_input_1 = require("./payment-schedule-where.input");
const payment_schedule_order_by_with_relation_input_1 = require("./payment-schedule-order-by-with-relation.input");
const payment_schedule_where_unique_input_1 = require("./payment-schedule-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const payment_schedule_count_aggregate_input_1 = require("./payment-schedule-count-aggregate.input");
const payment_schedule_avg_aggregate_input_1 = require("./payment-schedule-avg-aggregate.input");
const payment_schedule_sum_aggregate_input_1 = require("./payment-schedule-sum-aggregate.input");
const payment_schedule_min_aggregate_input_1 = require("./payment-schedule-min-aggregate.input");
const payment_schedule_max_aggregate_input_1 = require("./payment-schedule-max-aggregate.input");
let PaymentScheduleAggregateArgs = class PaymentScheduleAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_where_input_1.PaymentScheduleWhereInput, { nullable: true }),
    __metadata("design:type", payment_schedule_where_input_1.PaymentScheduleWhereInput)
], PaymentScheduleAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [payment_schedule_order_by_with_relation_input_1.PaymentScheduleOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], PaymentScheduleAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_where_unique_input_1.PaymentScheduleWhereUniqueInput, { nullable: true }),
    __metadata("design:type", payment_schedule_where_unique_input_1.PaymentScheduleWhereUniqueInput)
], PaymentScheduleAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], PaymentScheduleAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], PaymentScheduleAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_count_aggregate_input_1.PaymentScheduleCountAggregateInput, { nullable: true }),
    __metadata("design:type", payment_schedule_count_aggregate_input_1.PaymentScheduleCountAggregateInput)
], PaymentScheduleAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_avg_aggregate_input_1.PaymentScheduleAvgAggregateInput, { nullable: true }),
    __metadata("design:type", payment_schedule_avg_aggregate_input_1.PaymentScheduleAvgAggregateInput)
], PaymentScheduleAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_sum_aggregate_input_1.PaymentScheduleSumAggregateInput, { nullable: true }),
    __metadata("design:type", payment_schedule_sum_aggregate_input_1.PaymentScheduleSumAggregateInput)
], PaymentScheduleAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_min_aggregate_input_1.PaymentScheduleMinAggregateInput, { nullable: true }),
    __metadata("design:type", payment_schedule_min_aggregate_input_1.PaymentScheduleMinAggregateInput)
], PaymentScheduleAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_max_aggregate_input_1.PaymentScheduleMaxAggregateInput, { nullable: true }),
    __metadata("design:type", payment_schedule_max_aggregate_input_1.PaymentScheduleMaxAggregateInput)
], PaymentScheduleAggregateArgs.prototype, "_max", void 0);
PaymentScheduleAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], PaymentScheduleAggregateArgs);
exports.PaymentScheduleAggregateArgs = PaymentScheduleAggregateArgs;
//# sourceMappingURL=payment-schedule-aggregate.args.js.map