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
exports.LoanOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const graphql_3 = require("@nestjs/graphql");
const loan_count_order_by_aggregate_input_1 = require("./loan-count-order-by-aggregate.input");
const loan_avg_order_by_aggregate_input_1 = require("./loan-avg-order-by-aggregate.input");
const loan_max_order_by_aggregate_input_1 = require("./loan-max-order-by-aggregate.input");
const loan_min_order_by_aggregate_input_1 = require("./loan-min-order-by-aggregate.input");
const loan_sum_order_by_aggregate_input_1 = require("./loan-sum-order-by-aggregate.input");
let LoanOrderByWithAggregationInput = class LoanOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LoanOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], LoanOrderByWithAggregationInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LoanOrderByWithAggregationInput.prototype, "weeklyPaymentAmount", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LoanOrderByWithAggregationInput.prototype, "amountToPay", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LoanOrderByWithAggregationInput.prototype, "signDate", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], LoanOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], LoanOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LoanOrderByWithAggregationInput.prototype, "contractId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LoanOrderByWithAggregationInput.prototype, "loantypeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LoanOrderByWithAggregationInput.prototype, "employeeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_count_order_by_aggregate_input_1.LoanCountOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", loan_count_order_by_aggregate_input_1.LoanCountOrderByAggregateInput)
], LoanOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_avg_order_by_aggregate_input_1.LoanAvgOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", loan_avg_order_by_aggregate_input_1.LoanAvgOrderByAggregateInput)
], LoanOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_max_order_by_aggregate_input_1.LoanMaxOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", loan_max_order_by_aggregate_input_1.LoanMaxOrderByAggregateInput)
], LoanOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_min_order_by_aggregate_input_1.LoanMinOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", loan_min_order_by_aggregate_input_1.LoanMinOrderByAggregateInput)
], LoanOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_sum_order_by_aggregate_input_1.LoanSumOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", loan_sum_order_by_aggregate_input_1.LoanSumOrderByAggregateInput)
], LoanOrderByWithAggregationInput.prototype, "_sum", void 0);
LoanOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], LoanOrderByWithAggregationInput);
exports.LoanOrderByWithAggregationInput = LoanOrderByWithAggregationInput;
//# sourceMappingURL=loan-order-by-with-aggregation.input.js.map