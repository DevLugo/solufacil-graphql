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
exports.PaymentScheduleOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const graphql_3 = require("@nestjs/graphql");
const payment_schedule_count_order_by_aggregate_input_1 = require("./payment-schedule-count-order-by-aggregate.input");
const payment_schedule_avg_order_by_aggregate_input_1 = require("./payment-schedule-avg-order-by-aggregate.input");
const payment_schedule_max_order_by_aggregate_input_1 = require("./payment-schedule-max-order-by-aggregate.input");
const payment_schedule_min_order_by_aggregate_input_1 = require("./payment-schedule-min-order-by-aggregate.input");
const payment_schedule_sum_order_by_aggregate_input_1 = require("./payment-schedule-sum-order-by-aggregate.input");
let PaymentScheduleOrderByWithAggregationInput = class PaymentScheduleOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], PaymentScheduleOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], PaymentScheduleOrderByWithAggregationInput.prototype, "numeration", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], PaymentScheduleOrderByWithAggregationInput.prototype, "amountToPay", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], PaymentScheduleOrderByWithAggregationInput.prototype, "paidAmount", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], PaymentScheduleOrderByWithAggregationInput.prototype, "returnToCapital", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], PaymentScheduleOrderByWithAggregationInput.prototype, "profit", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], PaymentScheduleOrderByWithAggregationInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], PaymentScheduleOrderByWithAggregationInput.prototype, "delayed", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], PaymentScheduleOrderByWithAggregationInput.prototype, "dueDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], PaymentScheduleOrderByWithAggregationInput.prototype, "details", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], PaymentScheduleOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], PaymentScheduleOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], PaymentScheduleOrderByWithAggregationInput.prototype, "loanId", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_count_order_by_aggregate_input_1.PaymentScheduleCountOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", payment_schedule_count_order_by_aggregate_input_1.PaymentScheduleCountOrderByAggregateInput)
], PaymentScheduleOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_avg_order_by_aggregate_input_1.PaymentScheduleAvgOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", payment_schedule_avg_order_by_aggregate_input_1.PaymentScheduleAvgOrderByAggregateInput)
], PaymentScheduleOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_max_order_by_aggregate_input_1.PaymentScheduleMaxOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", payment_schedule_max_order_by_aggregate_input_1.PaymentScheduleMaxOrderByAggregateInput)
], PaymentScheduleOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_min_order_by_aggregate_input_1.PaymentScheduleMinOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", payment_schedule_min_order_by_aggregate_input_1.PaymentScheduleMinOrderByAggregateInput)
], PaymentScheduleOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_sum_order_by_aggregate_input_1.PaymentScheduleSumOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", payment_schedule_sum_order_by_aggregate_input_1.PaymentScheduleSumOrderByAggregateInput)
], PaymentScheduleOrderByWithAggregationInput.prototype, "_sum", void 0);
PaymentScheduleOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], PaymentScheduleOrderByWithAggregationInput);
exports.PaymentScheduleOrderByWithAggregationInput = PaymentScheduleOrderByWithAggregationInput;
//# sourceMappingURL=payment-schedule-order-by-with-aggregation.input.js.map