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
exports.LoanPaymentCreateWithoutLoanInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const runtime_1 = require("@prisma/client/runtime");
const prisma_graphql_type_decimal_1 = require("prisma-graphql-type-decimal");
const graphql_3 = require("@nestjs/graphql");
const payment_schedule_create_nested_many_without_loan_payments_input_1 = require("../payment-schedule/payment-schedule-create-nested-many-without-loan-payments.input");
const employee_create_nested_one_without_loan_payment_input_1 = require("../employee/employee-create-nested-one-without-loan-payment.input");
let LoanPaymentCreateWithoutLoanInput = class LoanPaymentCreateWithoutLoanInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], LoanPaymentCreateWithoutLoanInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: false }),
    __metadata("design:type", runtime_1.Decimal)
], LoanPaymentCreateWithoutLoanInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], LoanPaymentCreateWithoutLoanInput.prototype, "date", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], LoanPaymentCreateWithoutLoanInput.prototype, "comments", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], LoanPaymentCreateWithoutLoanInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], LoanPaymentCreateWithoutLoanInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_create_nested_many_without_loan_payments_input_1.PaymentScheduleCreateNestedManyWithoutLoanPaymentsInput, { nullable: true }),
    __metadata("design:type", payment_schedule_create_nested_many_without_loan_payments_input_1.PaymentScheduleCreateNestedManyWithoutLoanPaymentsInput)
], LoanPaymentCreateWithoutLoanInput.prototype, "paymentSchedules", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_create_nested_one_without_loan_payment_input_1.EmployeeCreateNestedOneWithoutLoanPaymentInput, { nullable: false }),
    __metadata("design:type", employee_create_nested_one_without_loan_payment_input_1.EmployeeCreateNestedOneWithoutLoanPaymentInput)
], LoanPaymentCreateWithoutLoanInput.prototype, "employee", void 0);
LoanPaymentCreateWithoutLoanInput = __decorate([
    (0, graphql_2.InputType)()
], LoanPaymentCreateWithoutLoanInput);
exports.LoanPaymentCreateWithoutLoanInput = LoanPaymentCreateWithoutLoanInput;
//# sourceMappingURL=loan-payment-create-without-loan.input.js.map