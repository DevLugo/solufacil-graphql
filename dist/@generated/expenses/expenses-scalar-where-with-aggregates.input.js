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
var ExpensesScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpensesScalarWhereWithAggregatesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_with_aggregates_filter_input_1 = require("../prisma/string-with-aggregates-filter.input");
const decimal_with_aggregates_filter_input_1 = require("../prisma/decimal-with-aggregates-filter.input");
const enum_payment_state_with_aggregates_filter_input_1 = require("../prisma/enum-payment-state-with-aggregates-filter.input");
const date_time_with_aggregates_filter_input_1 = require("../prisma/date-time-with-aggregates-filter.input");
const graphql_3 = require("@nestjs/graphql");
const string_nullable_with_aggregates_filter_input_1 = require("../prisma/string-nullable-with-aggregates-filter.input");
let ExpensesScalarWhereWithAggregatesInput = ExpensesScalarWhereWithAggregatesInput_1 = class ExpensesScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ExpensesScalarWhereWithAggregatesInput_1], { nullable: true }),
    __metadata("design:type", Array)
], ExpensesScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ExpensesScalarWhereWithAggregatesInput_1], { nullable: true }),
    __metadata("design:type", Array)
], ExpensesScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ExpensesScalarWhereWithAggregatesInput_1], { nullable: true }),
    __metadata("design:type", Array)
], ExpensesScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", string_with_aggregates_filter_input_1.StringWithAggregatesFilter)
], ExpensesScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => decimal_with_aggregates_filter_input_1.DecimalWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", decimal_with_aggregates_filter_input_1.DecimalWithAggregatesFilter)
], ExpensesScalarWhereWithAggregatesInput.prototype, "amountToPay", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_payment_state_with_aggregates_filter_input_1.EnumPaymentStateWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", enum_payment_state_with_aggregates_filter_input_1.EnumPaymentStateWithAggregatesFilter)
], ExpensesScalarWhereWithAggregatesInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter)
], ExpensesScalarWhereWithAggregatesInput.prototype, "dueDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter)
], ExpensesScalarWhereWithAggregatesInput.prototype, "payedAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter)
], ExpensesScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter)
], ExpensesScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_with_aggregates_filter_input_1.StringNullableWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", string_nullable_with_aggregates_filter_input_1.StringNullableWithAggregatesFilter)
], ExpensesScalarWhereWithAggregatesInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", string_with_aggregates_filter_input_1.StringWithAggregatesFilter)
], ExpensesScalarWhereWithAggregatesInput.prototype, "employeeId", void 0);
ExpensesScalarWhereWithAggregatesInput = ExpensesScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_2.InputType)()
], ExpensesScalarWhereWithAggregatesInput);
exports.ExpensesScalarWhereWithAggregatesInput = ExpensesScalarWhereWithAggregatesInput;
//# sourceMappingURL=expenses-scalar-where-with-aggregates.input.js.map