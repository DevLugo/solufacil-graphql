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
exports.ContractUpsertWithWhereUniqueWithoutLoanLeadInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const contract_where_unique_input_1 = require("./contract-where-unique.input");
const contract_update_without_loan_lead_input_1 = require("./contract-update-without-loan-lead.input");
const contract_create_without_loan_lead_input_1 = require("./contract-create-without-loan-lead.input");
let ContractUpsertWithWhereUniqueWithoutLoanLeadInput = class ContractUpsertWithWhereUniqueWithoutLoanLeadInput {
};
__decorate([
    (0, graphql_1.Field)(() => contract_where_unique_input_1.ContractWhereUniqueInput, { nullable: false }),
    __metadata("design:type", contract_where_unique_input_1.ContractWhereUniqueInput)
], ContractUpsertWithWhereUniqueWithoutLoanLeadInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_update_without_loan_lead_input_1.ContractUpdateWithoutLoanLeadInput, { nullable: false }),
    __metadata("design:type", contract_update_without_loan_lead_input_1.ContractUpdateWithoutLoanLeadInput)
], ContractUpsertWithWhereUniqueWithoutLoanLeadInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_create_without_loan_lead_input_1.ContractCreateWithoutLoanLeadInput, { nullable: false }),
    __metadata("design:type", contract_create_without_loan_lead_input_1.ContractCreateWithoutLoanLeadInput)
], ContractUpsertWithWhereUniqueWithoutLoanLeadInput.prototype, "create", void 0);
ContractUpsertWithWhereUniqueWithoutLoanLeadInput = __decorate([
    (0, graphql_2.InputType)()
], ContractUpsertWithWhereUniqueWithoutLoanLeadInput);
exports.ContractUpsertWithWhereUniqueWithoutLoanLeadInput = ContractUpsertWithWhereUniqueWithoutLoanLeadInput;
//# sourceMappingURL=contract-upsert-with-where-unique-without-loan-lead.input.js.map