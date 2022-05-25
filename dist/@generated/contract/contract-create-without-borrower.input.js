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
exports.ContractCreateWithoutBorrowerInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const document_create_nested_many_without_contract_input_1 = require("../document/document-create-nested-many-without-contract.input");
const loan_create_nested_many_without_contract_input_1 = require("../loan/loan-create-nested-many-without-contract.input");
const contract_type_create_nested_one_without_contract_input_1 = require("../contract-type/contract-type-create-nested-one-without-contract.input");
const employee_create_nested_one_without_contract_loan_lead_input_1 = require("../employee/employee-create-nested-one-without-contract-loan-lead.input");
const employee_create_nested_one_without_contract_employee_input_1 = require("../employee/employee-create-nested-one-without-contract-employee.input");
let ContractCreateWithoutBorrowerInput = class ContractCreateWithoutBorrowerInput {
};
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", String)
], ContractCreateWithoutBorrowerInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_create_nested_many_without_contract_input_1.DocumentCreateNestedManyWithoutContractInput, { nullable: true }),
    __metadata("design:type", document_create_nested_many_without_contract_input_1.DocumentCreateNestedManyWithoutContractInput)
], ContractCreateWithoutBorrowerInput.prototype, "documents", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", loan_create_nested_many_without_contract_input_1.LoanCreateNestedManyWithoutContractInput)
], ContractCreateWithoutBorrowerInput.prototype, "loans", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], ContractCreateWithoutBorrowerInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], ContractCreateWithoutBorrowerInput.prototype, "dueDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], ContractCreateWithoutBorrowerInput.prototype, "signDate", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], ContractCreateWithoutBorrowerInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_type_create_nested_one_without_contract_input_1.ContractTypeCreateNestedOneWithoutContractInput, { nullable: false }),
    __metadata("design:type", contract_type_create_nested_one_without_contract_input_1.ContractTypeCreateNestedOneWithoutContractInput)
], ContractCreateWithoutBorrowerInput.prototype, "contractType", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_create_nested_one_without_contract_loan_lead_input_1.EmployeeCreateNestedOneWithoutContractLoanLeadInput, { nullable: true }),
    __metadata("design:type", employee_create_nested_one_without_contract_loan_lead_input_1.EmployeeCreateNestedOneWithoutContractLoanLeadInput)
], ContractCreateWithoutBorrowerInput.prototype, "loanLead", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_create_nested_one_without_contract_employee_input_1.EmployeeCreateNestedOneWithoutContractEmployeeInput, { nullable: false }),
    __metadata("design:type", employee_create_nested_one_without_contract_employee_input_1.EmployeeCreateNestedOneWithoutContractEmployeeInput)
], ContractCreateWithoutBorrowerInput.prototype, "employee", void 0);
ContractCreateWithoutBorrowerInput = __decorate([
    (0, graphql_2.InputType)()
], ContractCreateWithoutBorrowerInput);
exports.ContractCreateWithoutBorrowerInput = ContractCreateWithoutBorrowerInput;
//# sourceMappingURL=contract-create-without-borrower.input.js.map