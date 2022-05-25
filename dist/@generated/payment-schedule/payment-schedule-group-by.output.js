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
exports.PaymentScheduleGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const runtime_1 = require("@prisma/client/runtime");
const prisma_graphql_type_decimal_1 = require("prisma-graphql-type-decimal");
const payment_state_enum_1 = require("../prisma/payment-state.enum");
const payment_schedule_count_aggregate_output_1 = require("./payment-schedule-count-aggregate.output");
const payment_schedule_avg_aggregate_output_1 = require("./payment-schedule-avg-aggregate.output");
const payment_schedule_sum_aggregate_output_1 = require("./payment-schedule-sum-aggregate.output");
const payment_schedule_min_aggregate_output_1 = require("./payment-schedule-min-aggregate.output");
const payment_schedule_max_aggregate_output_1 = require("./payment-schedule-max-aggregate.output");
let PaymentScheduleGroupBy = class PaymentScheduleGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], PaymentScheduleGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], PaymentScheduleGroupBy.prototype, "numeration", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: false }),
    __metadata("design:type", runtime_1.Decimal)
], PaymentScheduleGroupBy.prototype, "amountToPay", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: false }),
    __metadata("design:type", runtime_1.Decimal)
], PaymentScheduleGroupBy.prototype, "paidAmount", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: false }),
    __metadata("design:type", runtime_1.Decimal)
], PaymentScheduleGroupBy.prototype, "returnToCapital", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: false }),
    __metadata("design:type", runtime_1.Decimal)
], PaymentScheduleGroupBy.prototype, "profit", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_state_enum_1.PaymentState, { nullable: false }),
    __metadata("design:type", Object)
], PaymentScheduleGroupBy.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: false }),
    __metadata("design:type", Boolean)
], PaymentScheduleGroupBy.prototype, "delayed", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], PaymentScheduleGroupBy.prototype, "dueDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], PaymentScheduleGroupBy.prototype, "details", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], PaymentScheduleGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], PaymentScheduleGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], PaymentScheduleGroupBy.prototype, "loanId", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_count_aggregate_output_1.PaymentScheduleCountAggregate, { nullable: true }),
    __metadata("design:type", payment_schedule_count_aggregate_output_1.PaymentScheduleCountAggregate)
], PaymentScheduleGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_avg_aggregate_output_1.PaymentScheduleAvgAggregate, { nullable: true }),
    __metadata("design:type", payment_schedule_avg_aggregate_output_1.PaymentScheduleAvgAggregate)
], PaymentScheduleGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_sum_aggregate_output_1.PaymentScheduleSumAggregate, { nullable: true }),
    __metadata("design:type", payment_schedule_sum_aggregate_output_1.PaymentScheduleSumAggregate)
], PaymentScheduleGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_min_aggregate_output_1.PaymentScheduleMinAggregate, { nullable: true }),
    __metadata("design:type", payment_schedule_min_aggregate_output_1.PaymentScheduleMinAggregate)
], PaymentScheduleGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_max_aggregate_output_1.PaymentScheduleMaxAggregate, { nullable: true }),
    __metadata("design:type", payment_schedule_max_aggregate_output_1.PaymentScheduleMaxAggregate)
], PaymentScheduleGroupBy.prototype, "_max", void 0);
PaymentScheduleGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], PaymentScheduleGroupBy);
exports.PaymentScheduleGroupBy = PaymentScheduleGroupBy;
//# sourceMappingURL=payment-schedule-group-by.output.js.map