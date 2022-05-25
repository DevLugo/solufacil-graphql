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
exports.ExpensesCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const runtime_1 = require("@prisma/client/runtime");
const prisma_graphql_type_decimal_1 = require("prisma-graphql-type-decimal");
const payment_state_enum_1 = require("../prisma/payment-state.enum");
const employee_create_nested_one_without_expenses_input_1 = require("../employee/employee-create-nested-one-without-expenses.input");
const graphql_3 = require("@nestjs/graphql");
let ExpensesCreateInput = class ExpensesCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], ExpensesCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: false }),
    __metadata("design:type", runtime_1.Decimal)
], ExpensesCreateInput.prototype, "amountToPay", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_state_enum_1.PaymentState, { nullable: false }),
    __metadata("design:type", Object)
], ExpensesCreateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], ExpensesCreateInput.prototype, "dueDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], ExpensesCreateInput.prototype, "payedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_create_nested_one_without_expenses_input_1.EmployeeCreateNestedOneWithoutExpensesInput, { nullable: false }),
    __metadata("design:type", employee_create_nested_one_without_expenses_input_1.EmployeeCreateNestedOneWithoutExpensesInput)
], ExpensesCreateInput.prototype, "employee", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], ExpensesCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], ExpensesCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], ExpensesCreateInput.prototype, "userId", void 0);
ExpensesCreateInput = __decorate([
    (0, graphql_2.InputType)()
], ExpensesCreateInput);
exports.ExpensesCreateInput = ExpensesCreateInput;
//# sourceMappingURL=expenses-create.input.js.map