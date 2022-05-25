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
exports.ContractUncheckedCreateWithoutBorrowerInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const document_unchecked_create_nested_many_without_contract_input_1 = require("../document/document-unchecked-create-nested-many-without-contract.input");
const loan_unchecked_create_nested_many_without_contract_input_1 = require("../loan/loan-unchecked-create-nested-many-without-contract.input");
const graphql_3 = require("@nestjs/graphql");
let ContractUncheckedCreateWithoutBorrowerInput = class ContractUncheckedCreateWithoutBorrowerInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], ContractUncheckedCreateWithoutBorrowerInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_unchecked_create_nested_many_without_contract_input_1.DocumentUncheckedCreateNestedManyWithoutContractInput, { nullable: true }),
    __metadata("design:type", document_unchecked_create_nested_many_without_contract_input_1.DocumentUncheckedCreateNestedManyWithoutContractInput)
], ContractUncheckedCreateWithoutBorrowerInput.prototype, "documents", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", loan_unchecked_create_nested_many_without_contract_input_1.LoanUncheckedCreateNestedManyWithoutContractInput)
], ContractUncheckedCreateWithoutBorrowerInput.prototype, "loans", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], ContractUncheckedCreateWithoutBorrowerInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], ContractUncheckedCreateWithoutBorrowerInput.prototype, "dueDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], ContractUncheckedCreateWithoutBorrowerInput.prototype, "signDate", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], ContractUncheckedCreateWithoutBorrowerInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], ContractUncheckedCreateWithoutBorrowerInput.prototype, "contractTypeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], ContractUncheckedCreateWithoutBorrowerInput.prototype, "loanLeadId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], ContractUncheckedCreateWithoutBorrowerInput.prototype, "employeeId", void 0);
ContractUncheckedCreateWithoutBorrowerInput = __decorate([
    (0, graphql_2.InputType)()
], ContractUncheckedCreateWithoutBorrowerInput);
exports.ContractUncheckedCreateWithoutBorrowerInput = ContractUncheckedCreateWithoutBorrowerInput;
//# sourceMappingURL=contract-unchecked-create-without-borrower.input.js.map