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
exports.ExpensesAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const expenses_where_input_1 = require("./expenses-where.input");
const expenses_order_by_with_relation_input_1 = require("./expenses-order-by-with-relation.input");
const expenses_where_unique_input_1 = require("./expenses-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const expenses_count_aggregate_input_1 = require("./expenses-count-aggregate.input");
const expenses_avg_aggregate_input_1 = require("./expenses-avg-aggregate.input");
const expenses_sum_aggregate_input_1 = require("./expenses-sum-aggregate.input");
const expenses_min_aggregate_input_1 = require("./expenses-min-aggregate.input");
const expenses_max_aggregate_input_1 = require("./expenses-max-aggregate.input");
let ExpensesAggregateArgs = class ExpensesAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => expenses_where_input_1.ExpensesWhereInput, { nullable: true }),
    __metadata("design:type", expenses_where_input_1.ExpensesWhereInput)
], ExpensesAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [expenses_order_by_with_relation_input_1.ExpensesOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], ExpensesAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => expenses_where_unique_input_1.ExpensesWhereUniqueInput, { nullable: true }),
    __metadata("design:type", expenses_where_unique_input_1.ExpensesWhereUniqueInput)
], ExpensesAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], ExpensesAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], ExpensesAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => expenses_count_aggregate_input_1.ExpensesCountAggregateInput, { nullable: true }),
    __metadata("design:type", expenses_count_aggregate_input_1.ExpensesCountAggregateInput)
], ExpensesAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => expenses_avg_aggregate_input_1.ExpensesAvgAggregateInput, { nullable: true }),
    __metadata("design:type", expenses_avg_aggregate_input_1.ExpensesAvgAggregateInput)
], ExpensesAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => expenses_sum_aggregate_input_1.ExpensesSumAggregateInput, { nullable: true }),
    __metadata("design:type", expenses_sum_aggregate_input_1.ExpensesSumAggregateInput)
], ExpensesAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => expenses_min_aggregate_input_1.ExpensesMinAggregateInput, { nullable: true }),
    __metadata("design:type", expenses_min_aggregate_input_1.ExpensesMinAggregateInput)
], ExpensesAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => expenses_max_aggregate_input_1.ExpensesMaxAggregateInput, { nullable: true }),
    __metadata("design:type", expenses_max_aggregate_input_1.ExpensesMaxAggregateInput)
], ExpensesAggregateArgs.prototype, "_max", void 0);
ExpensesAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], ExpensesAggregateArgs);
exports.ExpensesAggregateArgs = ExpensesAggregateArgs;
//# sourceMappingURL=expenses-aggregate.args.js.map