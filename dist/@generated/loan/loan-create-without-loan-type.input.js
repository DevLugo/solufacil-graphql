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
exports.LoanCreateWithoutLoanTypeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const loan_payment_create_nested_many_without_loan_input_1 = require("../loan-payment/loan-payment-create-nested-many-without-loan.input");
const runtime_1 = require("@prisma/client/runtime");
const prisma_graphql_type_decimal_1 = require("prisma-graphql-type-decimal");
const employee_create_nested_one_without_loan_input_1 = require("../employee/employee-create-nested-one-without-loan.input");
const contract_create_nested_one_without_loans_input_1 = require("../contract/contract-create-nested-one-without-loans.input");
const payment_schedule_create_nested_many_without_loan_input_1 = require("../payment-schedule/payment-schedule-create-nested-many-without-loan.input");
const commission_payment_create_nested_many_without_loan_input_1 = require("../commission-payment/commission-payment-create-nested-many-without-loan.input");
let LoanCreateWithoutLoanTypeInput = class LoanCreateWithoutLoanTypeInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], LoanCreateWithoutLoanTypeInput.prototype, "id", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], LoanCreateWithoutLoanTypeInput.prototype, "status", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", loan_payment_create_nested_many_without_loan_input_1.LoanPaymentCreateNestedManyWithoutLoanInput)
], LoanCreateWithoutLoanTypeInput.prototype, "payments", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: false }),
    __metadata("design:type", runtime_1.Decimal)
], LoanCreateWithoutLoanTypeInput.prototype, "weeklyPaymentAmount", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: true }),
    __metadata("design:type", runtime_1.Decimal)
], LoanCreateWithoutLoanTypeInput.prototype, "amountToPay", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], LoanCreateWithoutLoanTypeInput.prototype, "signDate", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], LoanCreateWithoutLoanTypeInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_create_nested_one_without_loan_input_1.EmployeeCreateNestedOneWithoutLoanInput, { nullable: false }),
    __metadata("design:type", employee_create_nested_one_without_loan_input_1.EmployeeCreateNestedOneWithoutLoanInput)
], LoanCreateWithoutLoanTypeInput.prototype, "employee", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], LoanCreateWithoutLoanTypeInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_create_nested_one_without_loans_input_1.ContractCreateNestedOneWithoutLoansInput, { nullable: false }),
    __metadata("design:type", contract_create_nested_one_without_loans_input_1.ContractCreateNestedOneWithoutLoansInput)
], LoanCreateWithoutLoanTypeInput.prototype, "contract", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_create_nested_many_without_loan_input_1.PaymentScheduleCreateNestedManyWithoutLoanInput, { nullable: true }),
    __metadata("design:type", payment_schedule_create_nested_many_without_loan_input_1.PaymentScheduleCreateNestedManyWithoutLoanInput)
], LoanCreateWithoutLoanTypeInput.prototype, "paymentSchedule", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_create_nested_many_without_loan_input_1.CommissionPaymentCreateNestedManyWithoutLoanInput, { nullable: true }),
    __metadata("design:type", commission_payment_create_nested_many_without_loan_input_1.CommissionPaymentCreateNestedManyWithoutLoanInput)
], LoanCreateWithoutLoanTypeInput.prototype, "CommissionPayment", void 0);
LoanCreateWithoutLoanTypeInput = __decorate([
    (0, graphql_2.InputType)()
], LoanCreateWithoutLoanTypeInput);
exports.LoanCreateWithoutLoanTypeInput = LoanCreateWithoutLoanTypeInput;
//# sourceMappingURL=loan-create-without-loan-type.input.js.map