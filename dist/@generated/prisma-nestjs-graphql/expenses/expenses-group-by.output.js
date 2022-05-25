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
exports.ExpensesGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const runtime_1 = require("@prisma/client/runtime");
const prisma_graphql_type_decimal_1 = require("prisma-graphql-type-decimal");
const payment_state_enum_1 = require("../prisma/payment-state.enum");
const expenses_count_aggregate_output_1 = require("./expenses-count-aggregate.output");
const expenses_avg_aggregate_output_1 = require("./expenses-avg-aggregate.output");
const expenses_sum_aggregate_output_1 = require("./expenses-sum-aggregate.output");
const expenses_min_aggregate_output_1 = require("./expenses-min-aggregate.output");
const expenses_max_aggregate_output_1 = require("./expenses-max-aggregate.output");
let ExpensesGroupBy = class ExpensesGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], ExpensesGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: false }),
    __metadata("design:type", runtime_1.Decimal)
], ExpensesGroupBy.prototype, "amountToPay", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_state_enum_1.PaymentState, { nullable: false }),
    __metadata("design:type", Object)
], ExpensesGroupBy.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], ExpensesGroupBy.prototype, "dueDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], ExpensesGroupBy.prototype, "payedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], ExpensesGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], ExpensesGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], ExpensesGroupBy.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], ExpensesGroupBy.prototype, "employeeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => expenses_count_aggregate_output_1.ExpensesCountAggregate, { nullable: true }),
    __metadata("design:type", expenses_count_aggregate_output_1.ExpensesCountAggregate)
], ExpensesGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => expenses_avg_aggregate_output_1.ExpensesAvgAggregate, { nullable: true }),
    __metadata("design:type", expenses_avg_aggregate_output_1.ExpensesAvgAggregate)
], ExpensesGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => expenses_sum_aggregate_output_1.ExpensesSumAggregate, { nullable: true }),
    __metadata("design:type", expenses_sum_aggregate_output_1.ExpensesSumAggregate)
], ExpensesGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => expenses_min_aggregate_output_1.ExpensesMinAggregate, { nullable: true }),
    __metadata("design:type", expenses_min_aggregate_output_1.ExpensesMinAggregate)
], ExpensesGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => expenses_max_aggregate_output_1.ExpensesMaxAggregate, { nullable: true }),
    __metadata("design:type", expenses_max_aggregate_output_1.ExpensesMaxAggregate)
], ExpensesGroupBy.prototype, "_max", void 0);
ExpensesGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], ExpensesGroupBy);
exports.ExpensesGroupBy = ExpensesGroupBy;
//# sourceMappingURL=expenses-group-by.output.js.map