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
exports.ContractUpdateWithoutLoanLeadInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const borrower_update_one_required_without_contract_input_1 = require("../borrower/borrower-update-one-required-without-contract.input");
const document_update_many_without_contract_input_1 = require("../document/document-update-many-without-contract.input");
const loan_update_many_without_contract_input_1 = require("../loan/loan-update-many-without-contract.input");
const graphql_3 = require("@nestjs/graphql");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const contract_type_update_one_required_without_contract_input_1 = require("../contract-type/contract-type-update-one-required-without-contract.input");
const employee_update_one_required_without_contract_employee_input_1 = require("../employee/employee-update-one-required-without-contract-employee.input");
let ContractUpdateWithoutLoanLeadInput = class ContractUpdateWithoutLoanLeadInput {
};
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], ContractUpdateWithoutLoanLeadInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => borrower_update_one_required_without_contract_input_1.BorrowerUpdateOneRequiredWithoutContractInput, { nullable: true }),
    __metadata("design:type", borrower_update_one_required_without_contract_input_1.BorrowerUpdateOneRequiredWithoutContractInput)
], ContractUpdateWithoutLoanLeadInput.prototype, "borrower", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_update_many_without_contract_input_1.DocumentUpdateManyWithoutContractInput, { nullable: true }),
    __metadata("design:type", document_update_many_without_contract_input_1.DocumentUpdateManyWithoutContractInput)
], ContractUpdateWithoutLoanLeadInput.prototype, "documents", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", loan_update_many_without_contract_input_1.LoanUpdateManyWithoutContractInput)
], ContractUpdateWithoutLoanLeadInput.prototype, "loans", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], ContractUpdateWithoutLoanLeadInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], ContractUpdateWithoutLoanLeadInput.prototype, "dueDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], ContractUpdateWithoutLoanLeadInput.prototype, "signDate", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], ContractUpdateWithoutLoanLeadInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_type_update_one_required_without_contract_input_1.ContractTypeUpdateOneRequiredWithoutContractInput, { nullable: true }),
    __metadata("design:type", contract_type_update_one_required_without_contract_input_1.ContractTypeUpdateOneRequiredWithoutContractInput)
], ContractUpdateWithoutLoanLeadInput.prototype, "contractType", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_update_one_required_without_contract_employee_input_1.EmployeeUpdateOneRequiredWithoutContractEmployeeInput, { nullable: true }),
    __metadata("design:type", employee_update_one_required_without_contract_employee_input_1.EmployeeUpdateOneRequiredWithoutContractEmployeeInput)
], ContractUpdateWithoutLoanLeadInput.prototype, "employee", void 0);
ContractUpdateWithoutLoanLeadInput = __decorate([
    (0, graphql_2.InputType)()
], ContractUpdateWithoutLoanLeadInput);
exports.ContractUpdateWithoutLoanLeadInput = ContractUpdateWithoutLoanLeadInput;
//# sourceMappingURL=contract-update-without-loan-lead.input.js.map