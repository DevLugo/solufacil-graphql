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
exports.LoanPaymentOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const graphql_3 = require("@nestjs/graphql");
const loan_payment_count_order_by_aggregate_input_1 = require("./loan-payment-count-order-by-aggregate.input");
const loan_payment_avg_order_by_aggregate_input_1 = require("./loan-payment-avg-order-by-aggregate.input");
const loan_payment_max_order_by_aggregate_input_1 = require("./loan-payment-max-order-by-aggregate.input");
const loan_payment_min_order_by_aggregate_input_1 = require("./loan-payment-min-order-by-aggregate.input");
const loan_payment_sum_order_by_aggregate_input_1 = require("./loan-payment-sum-order-by-aggregate.input");
let LoanPaymentOrderByWithAggregationInput = class LoanPaymentOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LoanPaymentOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LoanPaymentOrderByWithAggregationInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LoanPaymentOrderByWithAggregationInput.prototype, "date", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LoanPaymentOrderByWithAggregationInput.prototype, "comments", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], LoanPaymentOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], LoanPaymentOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LoanPaymentOrderByWithAggregationInput.prototype, "loanId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LoanPaymentOrderByWithAggregationInput.prototype, "employeeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_count_order_by_aggregate_input_1.LoanPaymentCountOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", loan_payment_count_order_by_aggregate_input_1.LoanPaymentCountOrderByAggregateInput)
], LoanPaymentOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_avg_order_by_aggregate_input_1.LoanPaymentAvgOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", loan_payment_avg_order_by_aggregate_input_1.LoanPaymentAvgOrderByAggregateInput)
], LoanPaymentOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_max_order_by_aggregate_input_1.LoanPaymentMaxOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", loan_payment_max_order_by_aggregate_input_1.LoanPaymentMaxOrderByAggregateInput)
], LoanPaymentOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_min_order_by_aggregate_input_1.LoanPaymentMinOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", loan_payment_min_order_by_aggregate_input_1.LoanPaymentMinOrderByAggregateInput)
], LoanPaymentOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_sum_order_by_aggregate_input_1.LoanPaymentSumOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", loan_payment_sum_order_by_aggregate_input_1.LoanPaymentSumOrderByAggregateInput)
], LoanPaymentOrderByWithAggregationInput.prototype, "_sum", void 0);
LoanPaymentOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], LoanPaymentOrderByWithAggregationInput);
exports.LoanPaymentOrderByWithAggregationInput = LoanPaymentOrderByWithAggregationInput;
//# sourceMappingURL=loan-payment-order-by-with-aggregation.input.js.map