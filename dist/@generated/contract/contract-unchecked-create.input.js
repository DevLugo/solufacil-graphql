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
exports.ContractUncheckedCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const document_unchecked_create_nested_many_without_contract_input_1 = require("../document/document-unchecked-create-nested-many-without-contract.input");
const loan_unchecked_create_nested_many_without_contract_input_1 = require("../loan/loan-unchecked-create-nested-many-without-contract.input");
const graphql_3 = require("@nestjs/graphql");
let ContractUncheckedCreateInput = class ContractUncheckedCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], ContractUncheckedCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], ContractUncheckedCreateInput.prototype, "borrowerId", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_unchecked_create_nested_many_without_contract_input_1.DocumentUncheckedCreateNestedManyWithoutContractInput, { nullable: true }),
    __metadata("design:type", document_unchecked_create_nested_many_without_contract_input_1.DocumentUncheckedCreateNestedManyWithoutContractInput)
], ContractUncheckedCreateInput.prototype, "documents", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", loan_unchecked_create_nested_many_without_contract_input_1.LoanUncheckedCreateNestedManyWithoutContractInput)
], ContractUncheckedCreateInput.prototype, "loans", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], ContractUncheckedCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], ContractUncheckedCreateInput.prototype, "dueDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], ContractUncheckedCreateInput.prototype, "signDate", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], ContractUncheckedCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], ContractUncheckedCreateInput.prototype, "contractTypeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], ContractUncheckedCreateInput.prototype, "loanLeadId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], ContractUncheckedCreateInput.prototype, "employeeId", void 0);
ContractUncheckedCreateInput = __decorate([
    (0, graphql_2.InputType)()
], ContractUncheckedCreateInput);
exports.ContractUncheckedCreateInput = ContractUncheckedCreateInput;
//# sourceMappingURL=contract-unchecked-create.input.js.map