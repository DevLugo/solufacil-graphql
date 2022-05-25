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
exports.EmployeeUncheckedCreateWithoutContractLoanLeadInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const employees_types_enum_1 = require("../prisma/employees-types.enum");
const phone_unchecked_create_nested_many_without_employee_input_1 = require("../phone/phone-unchecked-create-nested-many-without-employee.input");
const document_unchecked_create_nested_many_without_employee_input_1 = require("../document/document-unchecked-create-nested-many-without-employee.input");
const graphql_3 = require("@nestjs/graphql");
const loan_unchecked_create_nested_many_without_employee_input_1 = require("../loan/loan-unchecked-create-nested-many-without-employee.input");
const loan_payment_unchecked_create_nested_many_without_employee_input_1 = require("../loan-payment/loan-payment-unchecked-create-nested-many-without-employee.input");
const commission_payment_unchecked_create_nested_many_without_employee_input_1 = require("../commission-payment/commission-payment-unchecked-create-nested-many-without-employee.input");
const contract_unchecked_create_nested_many_without_employee_input_1 = require("../contract/contract-unchecked-create-nested-many-without-employee.input");
const expenses_unchecked_create_nested_many_without_employee_input_1 = require("../expenses/expenses-unchecked-create-nested-many-without-employee.input");
let EmployeeUncheckedCreateWithoutContractLoanLeadInput = class EmployeeUncheckedCreateWithoutContractLoanLeadInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], EmployeeUncheckedCreateWithoutContractLoanLeadInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => employees_types_enum_1.EmployeesTypes, { nullable: false }),
    __metadata("design:type", Object)
], EmployeeUncheckedCreateWithoutContractLoanLeadInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => phone_unchecked_create_nested_many_without_employee_input_1.PhoneUncheckedCreateNestedManyWithoutEmployeeInput, { nullable: true }),
    __metadata("design:type", phone_unchecked_create_nested_many_without_employee_input_1.PhoneUncheckedCreateNestedManyWithoutEmployeeInput)
], EmployeeUncheckedCreateWithoutContractLoanLeadInput.prototype, "phones", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_unchecked_create_nested_many_without_employee_input_1.DocumentUncheckedCreateNestedManyWithoutEmployeeInput, { nullable: true }),
    __metadata("design:type", document_unchecked_create_nested_many_without_employee_input_1.DocumentUncheckedCreateNestedManyWithoutEmployeeInput)
], EmployeeUncheckedCreateWithoutContractLoanLeadInput.prototype, "documents", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], EmployeeUncheckedCreateWithoutContractLoanLeadInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], EmployeeUncheckedCreateWithoutContractLoanLeadInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_unchecked_create_nested_many_without_employee_input_1.LoanUncheckedCreateNestedManyWithoutEmployeeInput, { nullable: true }),
    __metadata("design:type", loan_unchecked_create_nested_many_without_employee_input_1.LoanUncheckedCreateNestedManyWithoutEmployeeInput)
], EmployeeUncheckedCreateWithoutContractLoanLeadInput.prototype, "loan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], EmployeeUncheckedCreateWithoutContractLoanLeadInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_unchecked_create_nested_many_without_employee_input_1.LoanPaymentUncheckedCreateNestedManyWithoutEmployeeInput, { nullable: true }),
    __metadata("design:type", loan_payment_unchecked_create_nested_many_without_employee_input_1.LoanPaymentUncheckedCreateNestedManyWithoutEmployeeInput)
], EmployeeUncheckedCreateWithoutContractLoanLeadInput.prototype, "loanPayment", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_unchecked_create_nested_many_without_employee_input_1.CommissionPaymentUncheckedCreateNestedManyWithoutEmployeeInput, { nullable: true }),
    __metadata("design:type", commission_payment_unchecked_create_nested_many_without_employee_input_1.CommissionPaymentUncheckedCreateNestedManyWithoutEmployeeInput)
], EmployeeUncheckedCreateWithoutContractLoanLeadInput.prototype, "commissionPayment", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_unchecked_create_nested_many_without_employee_input_1.ContractUncheckedCreateNestedManyWithoutEmployeeInput, { nullable: true }),
    __metadata("design:type", contract_unchecked_create_nested_many_without_employee_input_1.ContractUncheckedCreateNestedManyWithoutEmployeeInput)
], EmployeeUncheckedCreateWithoutContractLoanLeadInput.prototype, "contractEmployee", void 0);
__decorate([
    (0, graphql_1.Field)(() => expenses_unchecked_create_nested_many_without_employee_input_1.ExpensesUncheckedCreateNestedManyWithoutEmployeeInput, { nullable: true }),
    __metadata("design:type", expenses_unchecked_create_nested_many_without_employee_input_1.ExpensesUncheckedCreateNestedManyWithoutEmployeeInput)
], EmployeeUncheckedCreateWithoutContractLoanLeadInput.prototype, "Expenses", void 0);
EmployeeUncheckedCreateWithoutContractLoanLeadInput = __decorate([
    (0, graphql_2.InputType)()
], EmployeeUncheckedCreateWithoutContractLoanLeadInput);
exports.EmployeeUncheckedCreateWithoutContractLoanLeadInput = EmployeeUncheckedCreateWithoutContractLoanLeadInput;
//# sourceMappingURL=employee-unchecked-create-without-contract-loan-lead.input.js.map