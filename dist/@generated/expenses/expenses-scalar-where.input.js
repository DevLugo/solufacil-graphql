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
var ExpensesScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpensesScalarWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_filter_input_1 = require("../prisma/string-filter.input");
const decimal_filter_input_1 = require("../prisma/decimal-filter.input");
const enum_payment_state_filter_input_1 = require("../prisma/enum-payment-state-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const graphql_3 = require("@nestjs/graphql");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
let ExpensesScalarWhereInput = ExpensesScalarWhereInput_1 = class ExpensesScalarWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ExpensesScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], ExpensesScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ExpensesScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], ExpensesScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ExpensesScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], ExpensesScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], ExpensesScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => decimal_filter_input_1.DecimalFilter, { nullable: true }),
    __metadata("design:type", decimal_filter_input_1.DecimalFilter)
], ExpensesScalarWhereInput.prototype, "amountToPay", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_payment_state_filter_input_1.EnumPaymentStateFilter, { nullable: true }),
    __metadata("design:type", enum_payment_state_filter_input_1.EnumPaymentStateFilter)
], ExpensesScalarWhereInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], ExpensesScalarWhereInput.prototype, "dueDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], ExpensesScalarWhereInput.prototype, "payedAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], ExpensesScalarWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], ExpensesScalarWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], ExpensesScalarWhereInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], ExpensesScalarWhereInput.prototype, "employeeId", void 0);
ExpensesScalarWhereInput = ExpensesScalarWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], ExpensesScalarWhereInput);
exports.ExpensesScalarWhereInput = ExpensesScalarWhereInput;
//# sourceMappingURL=expenses-scalar-where.input.js.map