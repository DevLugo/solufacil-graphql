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
exports.ContractUncheckedUpdateWithoutContractTypeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const document_unchecked_update_many_without_contract_input_1 = require("../document/document-unchecked-update-many-without-contract.input");
const loan_unchecked_update_many_without_contract_input_1 = require("../loan/loan-unchecked-update-many-without-contract.input");
const graphql_3 = require("@nestjs/graphql");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
let ContractUncheckedUpdateWithoutContractTypeInput = class ContractUncheckedUpdateWithoutContractTypeInput {
};
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], ContractUncheckedUpdateWithoutContractTypeInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], ContractUncheckedUpdateWithoutContractTypeInput.prototype, "borrowerId", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_unchecked_update_many_without_contract_input_1.DocumentUncheckedUpdateManyWithoutContractInput, { nullable: true }),
    __metadata("design:type", document_unchecked_update_many_without_contract_input_1.DocumentUncheckedUpdateManyWithoutContractInput)
], ContractUncheckedUpdateWithoutContractTypeInput.prototype, "documents", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", loan_unchecked_update_many_without_contract_input_1.LoanUncheckedUpdateManyWithoutContractInput)
], ContractUncheckedUpdateWithoutContractTypeInput.prototype, "loans", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], ContractUncheckedUpdateWithoutContractTypeInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], ContractUncheckedUpdateWithoutContractTypeInput.prototype, "dueDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], ContractUncheckedUpdateWithoutContractTypeInput.prototype, "signDate", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], ContractUncheckedUpdateWithoutContractTypeInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], ContractUncheckedUpdateWithoutContractTypeInput.prototype, "loanLeadId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], ContractUncheckedUpdateWithoutContractTypeInput.prototype, "employeeId", void 0);
ContractUncheckedUpdateWithoutContractTypeInput = __decorate([
    (0, graphql_2.InputType)()
], ContractUncheckedUpdateWithoutContractTypeInput);
exports.ContractUncheckedUpdateWithoutContractTypeInput = ContractUncheckedUpdateWithoutContractTypeInput;
//# sourceMappingURL=contract-unchecked-update-without-contract-type.input.js.map