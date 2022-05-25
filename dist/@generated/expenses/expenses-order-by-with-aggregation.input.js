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
exports.ExpensesOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const graphql_3 = require("@nestjs/graphql");
const expenses_count_order_by_aggregate_input_1 = require("./expenses-count-order-by-aggregate.input");
const expenses_avg_order_by_aggregate_input_1 = require("./expenses-avg-order-by-aggregate.input");
const expenses_max_order_by_aggregate_input_1 = require("./expenses-max-order-by-aggregate.input");
const expenses_min_order_by_aggregate_input_1 = require("./expenses-min-order-by-aggregate.input");
const expenses_sum_order_by_aggregate_input_1 = require("./expenses-sum-order-by-aggregate.input");
let ExpensesOrderByWithAggregationInput = class ExpensesOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ExpensesOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ExpensesOrderByWithAggregationInput.prototype, "amountToPay", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ExpensesOrderByWithAggregationInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ExpensesOrderByWithAggregationInput.prototype, "dueDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ExpensesOrderByWithAggregationInput.prototype, "payedAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], ExpensesOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], ExpensesOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ExpensesOrderByWithAggregationInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ExpensesOrderByWithAggregationInput.prototype, "employeeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => expenses_count_order_by_aggregate_input_1.ExpensesCountOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", expenses_count_order_by_aggregate_input_1.ExpensesCountOrderByAggregateInput)
], ExpensesOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => expenses_avg_order_by_aggregate_input_1.ExpensesAvgOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", expenses_avg_order_by_aggregate_input_1.ExpensesAvgOrderByAggregateInput)
], ExpensesOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => expenses_max_order_by_aggregate_input_1.ExpensesMaxOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", expenses_max_order_by_aggregate_input_1.ExpensesMaxOrderByAggregateInput)
], ExpensesOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => expenses_min_order_by_aggregate_input_1.ExpensesMinOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", expenses_min_order_by_aggregate_input_1.ExpensesMinOrderByAggregateInput)
], ExpensesOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => expenses_sum_order_by_aggregate_input_1.ExpensesSumOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", expenses_sum_order_by_aggregate_input_1.ExpensesSumOrderByAggregateInput)
], ExpensesOrderByWithAggregationInput.prototype, "_sum", void 0);
ExpensesOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], ExpensesOrderByWithAggregationInput);
exports.ExpensesOrderByWithAggregationInput = ExpensesOrderByWithAggregationInput;
//# sourceMappingURL=expenses-order-by-with-aggregation.input.js.map