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
exports.LoanCreateWithoutPaymentsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const runtime_1 = require("@prisma/client/runtime");
const prisma_graphql_type_decimal_1 = require("prisma-graphql-type-decimal");
const loantype_create_nested_one_without_loan_input_1 = require("../loantype/loantype-create-nested-one-without-loan.input");
const employee_create_nested_one_without_loan_input_1 = require("../employee/employee-create-nested-one-without-loan.input");
const contract_create_nested_one_without_loans_input_1 = require("../contract/contract-create-nested-one-without-loans.input");
const payment_schedule_create_nested_many_without_loan_input_1 = require("../payment-schedule/payment-schedule-create-nested-many-without-loan.input");
const commission_payment_create_nested_many_without_loan_input_1 = require("../commission-payment/commission-payment-create-nested-many-without-loan.input");
let LoanCreateWithoutPaymentsInput = class LoanCreateWithoutPaymentsInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], LoanCreateWithoutPaymentsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], LoanCreateWithoutPaymentsInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: false }),
    __metadata("design:type", runtime_1.Decimal)
], LoanCreateWithoutPaymentsInput.prototype, "weeklyPaymentAmount", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: true }),
    __metadata("design:type", runtime_1.Decimal)
], LoanCreateWithoutPaymentsInput.prototype, "amountToPay", void 0);
__decorate([
    (0, graphql_1.Field)(() => loantype_create_nested_one_without_loan_input_1.LoantypeCreateNestedOneWithoutLoanInput, { nullable: false }),
    __metadata("design:type", loantype_create_nested_one_without_loan_input_1.LoantypeCreateNestedOneWithoutLoanInput)
], LoanCreateWithoutPaymentsInput.prototype, "loanType", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], LoanCreateWithoutPaymentsInput.prototype, "signDate", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], LoanCreateWithoutPaymentsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_create_nested_one_without_loan_input_1.EmployeeCreateNestedOneWithoutLoanInput, { nullable: false }),
    __metadata("design:type", employee_create_nested_one_without_loan_input_1.EmployeeCreateNestedOneWithoutLoanInput)
], LoanCreateWithoutPaymentsInput.prototype, "employee", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], LoanCreateWithoutPaymentsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_create_nested_one_without_loans_input_1.ContractCreateNestedOneWithoutLoansInput, { nullable: false }),
    __metadata("design:type", contract_create_nested_one_without_loans_input_1.ContractCreateNestedOneWithoutLoansInput)
], LoanCreateWithoutPaymentsInput.prototype, "contract", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_create_nested_many_without_loan_input_1.PaymentScheduleCreateNestedManyWithoutLoanInput, { nullable: true }),
    __metadata("design:type", payment_schedule_create_nested_many_without_loan_input_1.PaymentScheduleCreateNestedManyWithoutLoanInput)
], LoanCreateWithoutPaymentsInput.prototype, "paymentSchedule", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_create_nested_many_without_loan_input_1.CommissionPaymentCreateNestedManyWithoutLoanInput, { nullable: true }),
    __metadata("design:type", commission_payment_create_nested_many_without_loan_input_1.CommissionPaymentCreateNestedManyWithoutLoanInput)
], LoanCreateWithoutPaymentsInput.prototype, "CommissionPayment", void 0);
LoanCreateWithoutPaymentsInput = __decorate([
    (0, graphql_2.InputType)()
], LoanCreateWithoutPaymentsInput);
exports.LoanCreateWithoutPaymentsInput = LoanCreateWithoutPaymentsInput;
//# sourceMappingURL=loan-create-without-payments.input.js.map