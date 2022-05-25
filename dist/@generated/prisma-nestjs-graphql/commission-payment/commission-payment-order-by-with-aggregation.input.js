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
exports.CommissionPaymentOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const commission_payment_count_order_by_aggregate_input_1 = require("./commission-payment-count-order-by-aggregate.input");
const commission_payment_avg_order_by_aggregate_input_1 = require("./commission-payment-avg-order-by-aggregate.input");
const commission_payment_max_order_by_aggregate_input_1 = require("./commission-payment-max-order-by-aggregate.input");
const commission_payment_min_order_by_aggregate_input_1 = require("./commission-payment-min-order-by-aggregate.input");
const commission_payment_sum_order_by_aggregate_input_1 = require("./commission-payment-sum-order-by-aggregate.input");
let CommissionPaymentOrderByWithAggregationInput = class CommissionPaymentOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CommissionPaymentOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CommissionPaymentOrderByWithAggregationInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CommissionPaymentOrderByWithAggregationInput.prototype, "loanId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CommissionPaymentOrderByWithAggregationInput.prototype, "paymentScheduleId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CommissionPaymentOrderByWithAggregationInput.prototype, "employeeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CommissionPaymentOrderByWithAggregationInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_count_order_by_aggregate_input_1.CommissionPaymentCountOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", commission_payment_count_order_by_aggregate_input_1.CommissionPaymentCountOrderByAggregateInput)
], CommissionPaymentOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_avg_order_by_aggregate_input_1.CommissionPaymentAvgOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", commission_payment_avg_order_by_aggregate_input_1.CommissionPaymentAvgOrderByAggregateInput)
], CommissionPaymentOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_max_order_by_aggregate_input_1.CommissionPaymentMaxOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", commission_payment_max_order_by_aggregate_input_1.CommissionPaymentMaxOrderByAggregateInput)
], CommissionPaymentOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_min_order_by_aggregate_input_1.CommissionPaymentMinOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", commission_payment_min_order_by_aggregate_input_1.CommissionPaymentMinOrderByAggregateInput)
], CommissionPaymentOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_sum_order_by_aggregate_input_1.CommissionPaymentSumOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", commission_payment_sum_order_by_aggregate_input_1.CommissionPaymentSumOrderByAggregateInput)
], CommissionPaymentOrderByWithAggregationInput.prototype, "_sum", void 0);
CommissionPaymentOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], CommissionPaymentOrderByWithAggregationInput);
exports.CommissionPaymentOrderByWithAggregationInput = CommissionPaymentOrderByWithAggregationInput;
//# sourceMappingURL=commission-payment-order-by-with-aggregation.input.js.map