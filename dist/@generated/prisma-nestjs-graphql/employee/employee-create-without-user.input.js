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
exports.EmployeeCreateWithoutUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const employees_types_enum_1 = require("../prisma/employees-types.enum");
const phone_create_nested_many_without_employee_input_1 = require("../phone/phone-create-nested-many-without-employee.input");
const document_create_nested_many_without_employee_input_1 = require("../document/document-create-nested-many-without-employee.input");
const loan_create_nested_many_without_employee_input_1 = require("../loan/loan-create-nested-many-without-employee.input");
const loan_payment_create_nested_many_without_employee_input_1 = require("../loan-payment/loan-payment-create-nested-many-without-employee.input");
const commission_payment_create_nested_many_without_employee_input_1 = require("../commission-payment/commission-payment-create-nested-many-without-employee.input");
const contract_create_nested_many_without_employee_input_1 = require("../contract/contract-create-nested-many-without-employee.input");
const contract_create_nested_many_without_loan_lead_input_1 = require("../contract/contract-create-nested-many-without-loan-lead.input");
const expenses_create_nested_many_without_employee_input_1 = require("../expenses/expenses-create-nested-many-without-employee.input");
let EmployeeCreateWithoutUserInput = class EmployeeCreateWithoutUserInput {
};
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", String)
], EmployeeCreateWithoutUserInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => employees_types_enum_1.EmployeesTypes, { nullable: false }),
    __metadata("design:type", Object)
], EmployeeCreateWithoutUserInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => phone_create_nested_many_without_employee_input_1.PhoneCreateNestedManyWithoutEmployeeInput, { nullable: true }),
    __metadata("design:type", phone_create_nested_many_without_employee_input_1.PhoneCreateNestedManyWithoutEmployeeInput)
], EmployeeCreateWithoutUserInput.prototype, "phones", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_create_nested_many_without_employee_input_1.DocumentCreateNestedManyWithoutEmployeeInput, { nullable: true }),
    __metadata("design:type", document_create_nested_many_without_employee_input_1.DocumentCreateNestedManyWithoutEmployeeInput)
], EmployeeCreateWithoutUserInput.prototype, "documents", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], EmployeeCreateWithoutUserInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], EmployeeCreateWithoutUserInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_create_nested_many_without_employee_input_1.LoanCreateNestedManyWithoutEmployeeInput, { nullable: true }),
    __metadata("design:type", loan_create_nested_many_without_employee_input_1.LoanCreateNestedManyWithoutEmployeeInput)
], EmployeeCreateWithoutUserInput.prototype, "loan", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_create_nested_many_without_employee_input_1.LoanPaymentCreateNestedManyWithoutEmployeeInput, { nullable: true }),
    __metadata("design:type", loan_payment_create_nested_many_without_employee_input_1.LoanPaymentCreateNestedManyWithoutEmployeeInput)
], EmployeeCreateWithoutUserInput.prototype, "loanPayment", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_create_nested_many_without_employee_input_1.CommissionPaymentCreateNestedManyWithoutEmployeeInput, { nullable: true }),
    __metadata("design:type", commission_payment_create_nested_many_without_employee_input_1.CommissionPaymentCreateNestedManyWithoutEmployeeInput)
], EmployeeCreateWithoutUserInput.prototype, "commissionPayment", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_create_nested_many_without_employee_input_1.ContractCreateNestedManyWithoutEmployeeInput, { nullable: true }),
    __metadata("design:type", contract_create_nested_many_without_employee_input_1.ContractCreateNestedManyWithoutEmployeeInput)
], EmployeeCreateWithoutUserInput.prototype, "contractEmployee", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_create_nested_many_without_loan_lead_input_1.ContractCreateNestedManyWithoutLoanLeadInput, { nullable: true }),
    __metadata("design:type", contract_create_nested_many_without_loan_lead_input_1.ContractCreateNestedManyWithoutLoanLeadInput)
], EmployeeCreateWithoutUserInput.prototype, "contractLoanLead", void 0);
__decorate([
    (0, graphql_1.Field)(() => expenses_create_nested_many_without_employee_input_1.ExpensesCreateNestedManyWithoutEmployeeInput, { nullable: true }),
    __metadata("design:type", expenses_create_nested_many_without_employee_input_1.ExpensesCreateNestedManyWithoutEmployeeInput)
], EmployeeCreateWithoutUserInput.prototype, "Expenses", void 0);
EmployeeCreateWithoutUserInput = __decorate([
    (0, graphql_2.InputType)()
], EmployeeCreateWithoutUserInput);
exports.EmployeeCreateWithoutUserInput = EmployeeCreateWithoutUserInput;
//# sourceMappingURL=employee-create-without-user.input.js.map