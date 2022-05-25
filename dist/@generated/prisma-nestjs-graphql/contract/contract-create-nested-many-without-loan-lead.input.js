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
exports.ContractCreateNestedManyWithoutLoanLeadInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const contract_create_without_loan_lead_input_1 = require("./contract-create-without-loan-lead.input");
const contract_create_or_connect_without_loan_lead_input_1 = require("./contract-create-or-connect-without-loan-lead.input");
const contract_create_many_loan_lead_input_envelope_input_1 = require("./contract-create-many-loan-lead-input-envelope.input");
const contract_where_unique_input_1 = require("./contract-where-unique.input");
let ContractCreateNestedManyWithoutLoanLeadInput = class ContractCreateNestedManyWithoutLoanLeadInput {
};
__decorate([
    (0, graphql_1.Field)(() => [contract_create_without_loan_lead_input_1.ContractCreateWithoutLoanLeadInput], { nullable: true }),
    __metadata("design:type", Array)
], ContractCreateNestedManyWithoutLoanLeadInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [contract_create_or_connect_without_loan_lead_input_1.ContractCreateOrConnectWithoutLoanLeadInput], { nullable: true }),
    __metadata("design:type", Array)
], ContractCreateNestedManyWithoutLoanLeadInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_create_many_loan_lead_input_envelope_input_1.ContractCreateManyLoanLeadInputEnvelope, { nullable: true }),
    __metadata("design:type", contract_create_many_loan_lead_input_envelope_input_1.ContractCreateManyLoanLeadInputEnvelope)
], ContractCreateNestedManyWithoutLoanLeadInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [contract_where_unique_input_1.ContractWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], ContractCreateNestedManyWithoutLoanLeadInput.prototype, "connect", void 0);
ContractCreateNestedManyWithoutLoanLeadInput = __decorate([
    (0, graphql_2.InputType)()
], ContractCreateNestedManyWithoutLoanLeadInput);
exports.ContractCreateNestedManyWithoutLoanLeadInput = ContractCreateNestedManyWithoutLoanLeadInput;
//# sourceMappingURL=contract-create-nested-many-without-loan-lead.input.js.map