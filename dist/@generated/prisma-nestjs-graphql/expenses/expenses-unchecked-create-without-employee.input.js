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
exports.ExpensesUncheckedCreateWithoutEmployeeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const runtime_1 = require("@prisma/client/runtime");
const prisma_graphql_type_decimal_1 = require("prisma-graphql-type-decimal");
const payment_state_enum_1 = require("../prisma/payment-state.enum");
const graphql_3 = require("@nestjs/graphql");
let ExpensesUncheckedCreateWithoutEmployeeInput = class ExpensesUncheckedCreateWithoutEmployeeInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], ExpensesUncheckedCreateWithoutEmployeeInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: false }),
    __metadata("design:type", runtime_1.Decimal)
], ExpensesUncheckedCreateWithoutEmployeeInput.prototype, "amountToPay", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_state_enum_1.PaymentState, { nullable: false }),
    __metadata("design:type", Object)
], ExpensesUncheckedCreateWithoutEmployeeInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], ExpensesUncheckedCreateWithoutEmployeeInput.prototype, "dueDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], ExpensesUncheckedCreateWithoutEmployeeInput.prototype, "payedAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], ExpensesUncheckedCreateWithoutEmployeeInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], ExpensesUncheckedCreateWithoutEmployeeInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], ExpensesUncheckedCreateWithoutEmployeeInput.prototype, "userId", void 0);
ExpensesUncheckedCreateWithoutEmployeeInput = __decorate([
    (0, graphql_2.InputType)()
], ExpensesUncheckedCreateWithoutEmployeeInput);
exports.ExpensesUncheckedCreateWithoutEmployeeInput = ExpensesUncheckedCreateWithoutEmployeeInput;
//# sourceMappingURL=expenses-unchecked-create-without-employee.input.js.map