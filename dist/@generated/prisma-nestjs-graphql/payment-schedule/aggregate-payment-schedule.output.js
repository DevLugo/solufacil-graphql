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
exports.AggregatePaymentSchedule = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const payment_schedule_count_aggregate_output_1 = require("./payment-schedule-count-aggregate.output");
const payment_schedule_avg_aggregate_output_1 = require("./payment-schedule-avg-aggregate.output");
const payment_schedule_sum_aggregate_output_1 = require("./payment-schedule-sum-aggregate.output");
const payment_schedule_min_aggregate_output_1 = require("./payment-schedule-min-aggregate.output");
const payment_schedule_max_aggregate_output_1 = require("./payment-schedule-max-aggregate.output");
let AggregatePaymentSchedule = class AggregatePaymentSchedule {
};
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_count_aggregate_output_1.PaymentScheduleCountAggregate, { nullable: true }),
    __metadata("design:type", payment_schedule_count_aggregate_output_1.PaymentScheduleCountAggregate)
], AggregatePaymentSchedule.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_avg_aggregate_output_1.PaymentScheduleAvgAggregate, { nullable: true }),
    __metadata("design:type", payment_schedule_avg_aggregate_output_1.PaymentScheduleAvgAggregate)
], AggregatePaymentSchedule.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_sum_aggregate_output_1.PaymentScheduleSumAggregate, { nullable: true }),
    __metadata("design:type", payment_schedule_sum_aggregate_output_1.PaymentScheduleSumAggregate)
], AggregatePaymentSchedule.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_min_aggregate_output_1.PaymentScheduleMinAggregate, { nullable: true }),
    __metadata("design:type", payment_schedule_min_aggregate_output_1.PaymentScheduleMinAggregate)
], AggregatePaymentSchedule.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_max_aggregate_output_1.PaymentScheduleMaxAggregate, { nullable: true }),
    __metadata("design:type", payment_schedule_max_aggregate_output_1.PaymentScheduleMaxAggregate)
], AggregatePaymentSchedule.prototype, "_max", void 0);
AggregatePaymentSchedule = __decorate([
    (0, graphql_2.ObjectType)()
], AggregatePaymentSchedule);
exports.AggregatePaymentSchedule = AggregatePaymentSchedule;
//# sourceMappingURL=aggregate-payment-schedule.output.js.map