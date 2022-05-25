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
exports.ContractCreateWithoutLoanLeadInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const borrower_create_nested_one_without_contract_input_1 = require("../borrower/borrower-create-nested-one-without-contract.input");
const document_create_nested_many_without_contract_input_1 = require("../document/document-create-nested-many-without-contract.input");
const loan_create_nested_many_without_contract_input_1 = require("../loan/loan-create-nested-many-without-contract.input");
const contract_type_create_nested_one_without_contract_input_1 = require("../contract-type/contract-type-create-nested-one-without-contract.input");
const employee_create_nested_one_without_contract_employee_input_1 = require("../employee/employee-create-nested-one-without-contract-employee.input");
let ContractCreateWithoutLoanLeadInput = class ContractCreateWithoutLoanLeadInput {
};
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", String)
], ContractCreateWithoutLoanLeadInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => borrower_create_nested_one_without_contract_input_1.BorrowerCreateNestedOneWithoutContractInput, { nullable: false }),
    __metadata("design:type", borrower_create_nested_one_without_contract_input_1.BorrowerCreateNestedOneWithoutContractInput)
], ContractCreateWithoutLoanLeadInput.prototype, "borrower", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_create_nested_many_without_contract_input_1.DocumentCreateNestedManyWithoutContractInput, { nullable: true }),
    __metadata("design:type", document_create_nested_many_without_contract_input_1.DocumentCreateNestedManyWithoutContractInput)
], ContractCreateWithoutLoanLeadInput.prototype, "documents", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", loan_create_nested_many_without_contract_input_1.LoanCreateNestedManyWithoutContractInput)
], ContractCreateWithoutLoanLeadInput.prototype, "loans", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], ContractCreateWithoutLoanLeadInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], ContractCreateWithoutLoanLeadInput.prototype, "dueDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], ContractCreateWithoutLoanLeadInput.prototype, "signDate", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], ContractCreateWithoutLoanLeadInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_type_create_nested_one_without_contract_input_1.ContractTypeCreateNestedOneWithoutContractInput, { nullable: false }),
    __metadata("design:type", contract_type_create_nested_one_without_contract_input_1.ContractTypeCreateNestedOneWithoutContractInput)
], ContractCreateWithoutLoanLeadInput.prototype, "contractType", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_create_nested_one_without_contract_employee_input_1.EmployeeCreateNestedOneWithoutContractEmployeeInput, { nullable: false }),
    __metadata("design:type", employee_create_nested_one_without_contract_employee_input_1.EmployeeCreateNestedOneWithoutContractEmployeeInput)
], ContractCreateWithoutLoanLeadInput.prototype, "employee", void 0);
ContractCreateWithoutLoanLeadInput = __decorate([
    (0, graphql_2.InputType)()
], ContractCreateWithoutLoanLeadInput);
exports.ContractCreateWithoutLoanLeadInput = ContractCreateWithoutLoanLeadInput;
//# sourceMappingURL=contract-create-without-loan-lead.input.js.map