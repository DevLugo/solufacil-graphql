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
exports.AggregateExpenses = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const expenses_count_aggregate_output_1 = require("./expenses-count-aggregate.output");
const expenses_avg_aggregate_output_1 = require("./expenses-avg-aggregate.output");
const expenses_sum_aggregate_output_1 = require("./expenses-sum-aggregate.output");
const expenses_min_aggregate_output_1 = require("./expenses-min-aggregate.output");
const expenses_max_aggregate_output_1 = require("./expenses-max-aggregate.output");
let AggregateExpenses = class AggregateExpenses {
};
__decorate([
    (0, graphql_1.Field)(() => expenses_count_aggregate_output_1.ExpensesCountAggregate, { nullable: true }),
    __metadata("design:type", expenses_count_aggregate_output_1.ExpensesCountAggregate)
], AggregateExpenses.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => expenses_avg_aggregate_output_1.ExpensesAvgAggregate, { nullable: true }),
    __metadata("design:type", expenses_avg_aggregate_output_1.ExpensesAvgAggregate)
], AggregateExpenses.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => expenses_sum_aggregate_output_1.ExpensesSumAggregate, { nullable: true }),
    __metadata("design:type", expenses_sum_aggregate_output_1.ExpensesSumAggregate)
], AggregateExpenses.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => expenses_min_aggregate_output_1.ExpensesMinAggregate, { nullable: true }),
    __metadata("design:type", expenses_min_aggregate_output_1.ExpensesMinAggregate)
], AggregateExpenses.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => expenses_max_aggregate_output_1.ExpensesMaxAggregate, { nullable: true }),
    __metadata("design:type", expenses_max_aggregate_output_1.ExpensesMaxAggregate)
], AggregateExpenses.prototype, "_max", void 0);
AggregateExpenses = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateExpenses);
exports.AggregateExpenses = AggregateExpenses;
//# sourceMappingURL=aggregate-expenses.output.js.map