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
exports.EmployeeUncheckedCreateWithoutExpensesInput = void 0;
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
const contract_unchecked_create_nested_many_without_loan_lead_input_1 = require("../contract/contract-unchecked-create-nested-many-without-loan-lead.input");
let EmployeeUncheckedCreateWithoutExpensesInput = class EmployeeUncheckedCreateWithoutExpensesInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], EmployeeUncheckedCreateWithoutExpensesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => employees_types_enum_1.EmployeesTypes, { nullable: false }),
    __metadata("design:type", Object)
], EmployeeUncheckedCreateWithoutExpensesInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => phone_unchecked_create_nested_many_without_employee_input_1.PhoneUncheckedCreateNestedManyWithoutEmployeeInput, { nullable: true }),
    __metadata("design:type", phone_unchecked_create_nested_many_without_employee_input_1.PhoneUncheckedCreateNestedManyWithoutEmployeeInput)
], EmployeeUncheckedCreateWithoutExpensesInput.prototype, "phones", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_unchecked_create_nested_many_without_employee_input_1.DocumentUncheckedCreateNestedManyWithoutEmployeeInput, { nullable: true }),
    __metadata("design:type", document_unchecked_create_nested_many_without_employee_input_1.DocumentUncheckedCreateNestedManyWithoutEmployeeInput)
], EmployeeUncheckedCreateWithoutExpensesInput.prototype, "documents", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], EmployeeUncheckedCreateWithoutExpensesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], EmployeeUncheckedCreateWithoutExpensesInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_unchecked_create_nested_many_without_employee_input_1.LoanUncheckedCreateNestedManyWithoutEmployeeInput, { nullable: true }),
    __metadata("design:type", loan_unchecked_create_nested_many_without_employee_input_1.LoanUncheckedCreateNestedManyWithoutEmployeeInput)
], EmployeeUncheckedCreateWithoutExpensesInput.prototype, "loan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], EmployeeUncheckedCreateWithoutExpensesInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_unchecked_create_nested_many_without_employee_input_1.LoanPaymentUncheckedCreateNestedManyWithoutEmployeeInput, { nullable: true }),
    __metadata("design:type", loan_payment_unchecked_create_nested_many_without_employee_input_1.LoanPaymentUncheckedCreateNestedManyWithoutEmployeeInput)
], EmployeeUncheckedCreateWithoutExpensesInput.prototype, "loanPayment", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_unchecked_create_nested_many_without_employee_input_1.CommissionPaymentUncheckedCreateNestedManyWithoutEmployeeInput, { nullable: true }),
    __metadata("design:type", commission_payment_unchecked_create_nested_many_without_employee_input_1.CommissionPaymentUncheckedCreateNestedManyWithoutEmployeeInput)
], EmployeeUncheckedCreateWithoutExpensesInput.prototype, "commissionPayment", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_unchecked_create_nested_many_without_employee_input_1.ContractUncheckedCreateNestedManyWithoutEmployeeInput, { nullable: true }),
    __metadata("design:type", contract_unchecked_create_nested_many_without_employee_input_1.ContractUncheckedCreateNestedManyWithoutEmployeeInput)
], EmployeeUncheckedCreateWithoutExpensesInput.prototype, "contractEmployee", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_unchecked_create_nested_many_without_loan_lead_input_1.ContractUncheckedCreateNestedManyWithoutLoanLeadInput, { nullable: true }),
    __metadata("design:type", contract_unchecked_create_nested_many_without_loan_lead_input_1.ContractUncheckedCreateNestedManyWithoutLoanLeadInput)
], EmployeeUncheckedCreateWithoutExpensesInput.prototype, "contractLoanLead", void 0);
EmployeeUncheckedCreateWithoutExpensesInput = __decorate([
    (0, graphql_2.InputType)()
], EmployeeUncheckedCreateWithoutExpensesInput);
exports.EmployeeUncheckedCreateWithoutExpensesInput = EmployeeUncheckedCreateWithoutExpensesInput;
//# sourceMappingURL=employee-unchecked-create-without-expenses.input.js.map