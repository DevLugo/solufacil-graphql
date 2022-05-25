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
exports.EmployeeCreateWithoutContractEmployeeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const employees_types_enum_1 = require("../prisma/employees-types.enum");
const phone_create_nested_many_without_employee_input_1 = require("../phone/phone-create-nested-many-without-employee.input");
const document_create_nested_many_without_employee_input_1 = require("../document/document-create-nested-many-without-employee.input");
const user_create_nested_one_without_employee_input_1 = require("../user/user-create-nested-one-without-employee.input");
const loan_create_nested_many_without_employee_input_1 = require("../loan/loan-create-nested-many-without-employee.input");
const loan_payment_create_nested_many_without_employee_input_1 = require("../loan-payment/loan-payment-create-nested-many-without-employee.input");
const commission_payment_create_nested_many_without_employee_input_1 = require("../commission-payment/commission-payment-create-nested-many-without-employee.input");
const contract_create_nested_many_without_loan_lead_input_1 = require("../contract/contract-create-nested-many-without-loan-lead.input");
const expenses_create_nested_many_without_employee_input_1 = require("../expenses/expenses-create-nested-many-without-employee.input");
let EmployeeCreateWithoutContractEmployeeInput = class EmployeeCreateWithoutContractEmployeeInput {
};
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", String)
], EmployeeCreateWithoutContractEmployeeInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => employees_types_enum_1.EmployeesTypes, { nullable: false }),
    __metadata("design:type", Object)
], EmployeeCreateWithoutContractEmployeeInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => phone_create_nested_many_without_employee_input_1.PhoneCreateNestedManyWithoutEmployeeInput, { nullable: true }),
    __metadata("design:type", phone_create_nested_many_without_employee_input_1.PhoneCreateNestedManyWithoutEmployeeInput)
], EmployeeCreateWithoutContractEmployeeInput.prototype, "phones", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_create_nested_many_without_employee_input_1.DocumentCreateNestedManyWithoutEmployeeInput, { nullable: true }),
    __metadata("design:type", document_create_nested_many_without_employee_input_1.DocumentCreateNestedManyWithoutEmployeeInput)
], EmployeeCreateWithoutContractEmployeeInput.prototype, "documents", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_nested_one_without_employee_input_1.UserCreateNestedOneWithoutEmployeeInput, { nullable: false }),
    __metadata("design:type", user_create_nested_one_without_employee_input_1.UserCreateNestedOneWithoutEmployeeInput)
], EmployeeCreateWithoutContractEmployeeInput.prototype, "user", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], EmployeeCreateWithoutContractEmployeeInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], EmployeeCreateWithoutContractEmployeeInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_create_nested_many_without_employee_input_1.LoanCreateNestedManyWithoutEmployeeInput, { nullable: true }),
    __metadata("design:type", loan_create_nested_many_without_employee_input_1.LoanCreateNestedManyWithoutEmployeeInput)
], EmployeeCreateWithoutContractEmployeeInput.prototype, "loan", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_create_nested_many_without_employee_input_1.LoanPaymentCreateNestedManyWithoutEmployeeInput, { nullable: true }),
    __metadata("design:type", loan_payment_create_nested_many_without_employee_input_1.LoanPaymentCreateNestedManyWithoutEmployeeInput)
], EmployeeCreateWithoutContractEmployeeInput.prototype, "loanPayment", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_create_nested_many_without_employee_input_1.CommissionPaymentCreateNestedManyWithoutEmployeeInput, { nullable: true }),
    __metadata("design:type", commission_payment_create_nested_many_without_employee_input_1.CommissionPaymentCreateNestedManyWithoutEmployeeInput)
], EmployeeCreateWithoutContractEmployeeInput.prototype, "commissionPayment", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_create_nested_many_without_loan_lead_input_1.ContractCreateNestedManyWithoutLoanLeadInput, { nullable: true }),
    __metadata("design:type", contract_create_nested_many_without_loan_lead_input_1.ContractCreateNestedManyWithoutLoanLeadInput)
], EmployeeCreateWithoutContractEmployeeInput.prototype, "contractLoanLead", void 0);
__decorate([
    (0, graphql_1.Field)(() => expenses_create_nested_many_without_employee_input_1.ExpensesCreateNestedManyWithoutEmployeeInput, { nullable: true }),
    __metadata("design:type", expenses_create_nested_many_without_employee_input_1.ExpensesCreateNestedManyWithoutEmployeeInput)
], EmployeeCreateWithoutContractEmployeeInput.prototype, "Expenses", void 0);
EmployeeCreateWithoutContractEmployeeInput = __decorate([
    (0, graphql_2.InputType)()
], EmployeeCreateWithoutContractEmployeeInput);
exports.EmployeeCreateWithoutContractEmployeeInput = EmployeeCreateWithoutContractEmployeeInput;
//# sourceMappingURL=employee-create-without-contract-employee.input.js.map