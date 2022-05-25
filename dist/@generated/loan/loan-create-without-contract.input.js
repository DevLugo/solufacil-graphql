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
exports.LoanCreateWithoutContractInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const loan_payment_create_nested_many_without_loan_input_1 = require("../loan-payment/loan-payment-create-nested-many-without-loan.input");
const runtime_1 = require("@prisma/client/runtime");
const prisma_graphql_type_decimal_1 = require("prisma-graphql-type-decimal");
const loantype_create_nested_one_without_loan_input_1 = require("../loantype/loantype-create-nested-one-without-loan.input");
const employee_create_nested_one_without_loan_input_1 = require("../employee/employee-create-nested-one-without-loan.input");
const payment_schedule_create_nested_many_without_loan_input_1 = require("../payment-schedule/payment-schedule-create-nested-many-without-loan.input");
const commission_payment_create_nested_many_without_loan_input_1 = require("../commission-payment/commission-payment-create-nested-many-without-loan.input");
let LoanCreateWithoutContractInput = class LoanCreateWithoutContractInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], LoanCreateWithoutContractInput.prototype, "id", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], LoanCreateWithoutContractInput.prototype, "status", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", loan_payment_create_nested_many_without_loan_input_1.LoanPaymentCreateNestedManyWithoutLoanInput)
], LoanCreateWithoutContractInput.prototype, "payments", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: false }),
    __metadata("design:type", runtime_1.Decimal)
], LoanCreateWithoutContractInput.prototype, "weeklyPaymentAmount", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: true }),
    __metadata("design:type", runtime_1.Decimal)
], LoanCreateWithoutContractInput.prototype, "amountToPay", void 0);
__decorate([
    (0, graphql_1.Field)(() => loantype_create_nested_one_without_loan_input_1.LoantypeCreateNestedOneWithoutLoanInput, { nullable: false }),
    __metadata("design:type", loantype_create_nested_one_without_loan_input_1.LoantypeCreateNestedOneWithoutLoanInput)
], LoanCreateWithoutContractInput.prototype, "loanType", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], LoanCreateWithoutContractInput.prototype, "signDate", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], LoanCreateWithoutContractInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_create_nested_one_without_loan_input_1.EmployeeCreateNestedOneWithoutLoanInput, { nullable: false }),
    __metadata("design:type", employee_create_nested_one_without_loan_input_1.EmployeeCreateNestedOneWithoutLoanInput)
], LoanCreateWithoutContractInput.prototype, "employee", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], LoanCreateWithoutContractInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_create_nested_many_without_loan_input_1.PaymentScheduleCreateNestedManyWithoutLoanInput, { nullable: true }),
    __metadata("design:type", payment_schedule_create_nested_many_without_loan_input_1.PaymentScheduleCreateNestedManyWithoutLoanInput)
], LoanCreateWithoutContractInput.prototype, "paymentSchedule", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_create_nested_many_without_loan_input_1.CommissionPaymentCreateNestedManyWithoutLoanInput, { nullable: true }),
    __metadata("design:type", commission_payment_create_nested_many_without_loan_input_1.CommissionPaymentCreateNestedManyWithoutLoanInput)
], LoanCreateWithoutContractInput.prototype, "CommissionPayment", void 0);
LoanCreateWithoutContractInput = __decorate([
    (0, graphql_2.InputType)()
], LoanCreateWithoutContractInput);
exports.LoanCreateWithoutContractInput = LoanCreateWithoutContractInput;
//# sourceMappingURL=loan-create-without-contract.input.js.map