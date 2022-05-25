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
exports.ContractUpdateWithoutContractTypeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const borrower_update_one_required_without_contract_input_1 = require("../borrower/borrower-update-one-required-without-contract.input");
const document_update_many_without_contract_input_1 = require("../document/document-update-many-without-contract.input");
const loan_update_many_without_contract_input_1 = require("../loan/loan-update-many-without-contract.input");
const graphql_3 = require("@nestjs/graphql");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const employee_update_one_without_contract_loan_lead_input_1 = require("../employee/employee-update-one-without-contract-loan-lead.input");
const employee_update_one_required_without_contract_employee_input_1 = require("../employee/employee-update-one-required-without-contract-employee.input");
let ContractUpdateWithoutContractTypeInput = class ContractUpdateWithoutContractTypeInput {
};
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], ContractUpdateWithoutContractTypeInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => borrower_update_one_required_without_contract_input_1.BorrowerUpdateOneRequiredWithoutContractInput, { nullable: true }),
    __metadata("design:type", borrower_update_one_required_without_contract_input_1.BorrowerUpdateOneRequiredWithoutContractInput)
], ContractUpdateWithoutContractTypeInput.prototype, "borrower", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_update_many_without_contract_input_1.DocumentUpdateManyWithoutContractInput, { nullable: true }),
    __metadata("design:type", document_update_many_without_contract_input_1.DocumentUpdateManyWithoutContractInput)
], ContractUpdateWithoutContractTypeInput.prototype, "documents", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", loan_update_many_without_contract_input_1.LoanUpdateManyWithoutContractInput)
], ContractUpdateWithoutContractTypeInput.prototype, "loans", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], ContractUpdateWithoutContractTypeInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], ContractUpdateWithoutContractTypeInput.prototype, "dueDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], ContractUpdateWithoutContractTypeInput.prototype, "signDate", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], ContractUpdateWithoutContractTypeInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_update_one_without_contract_loan_lead_input_1.EmployeeUpdateOneWithoutContractLoanLeadInput, { nullable: true }),
    __metadata("design:type", employee_update_one_without_contract_loan_lead_input_1.EmployeeUpdateOneWithoutContractLoanLeadInput)
], ContractUpdateWithoutContractTypeInput.prototype, "loanLead", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_update_one_required_without_contract_employee_input_1.EmployeeUpdateOneRequiredWithoutContractEmployeeInput, { nullable: true }),
    __metadata("design:type", employee_update_one_required_without_contract_employee_input_1.EmployeeUpdateOneRequiredWithoutContractEmployeeInput)
], ContractUpdateWithoutContractTypeInput.prototype, "employee", void 0);
ContractUpdateWithoutContractTypeInput = __decorate([
    (0, graphql_2.InputType)()
], ContractUpdateWithoutContractTypeInput);
exports.ContractUpdateWithoutContractTypeInput = ContractUpdateWithoutContractTypeInput;
//# sourceMappingURL=contract-update-without-contract-type.input.js.map