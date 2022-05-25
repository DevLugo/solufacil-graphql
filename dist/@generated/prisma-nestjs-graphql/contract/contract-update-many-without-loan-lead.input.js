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
exports.ContractUpdateManyWithoutLoanLeadInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const contract_create_without_loan_lead_input_1 = require("./contract-create-without-loan-lead.input");
const contract_create_or_connect_without_loan_lead_input_1 = require("./contract-create-or-connect-without-loan-lead.input");
const contract_upsert_with_where_unique_without_loan_lead_input_1 = require("./contract-upsert-with-where-unique-without-loan-lead.input");
const contract_create_many_loan_lead_input_envelope_input_1 = require("./contract-create-many-loan-lead-input-envelope.input");
const contract_where_unique_input_1 = require("./contract-where-unique.input");
const contract_update_with_where_unique_without_loan_lead_input_1 = require("./contract-update-with-where-unique-without-loan-lead.input");
const contract_update_many_with_where_without_loan_lead_input_1 = require("./contract-update-many-with-where-without-loan-lead.input");
const contract_scalar_where_input_1 = require("./contract-scalar-where.input");
let ContractUpdateManyWithoutLoanLeadInput = class ContractUpdateManyWithoutLoanLeadInput {
};
__decorate([
    (0, graphql_1.Field)(() => [contract_create_without_loan_lead_input_1.ContractCreateWithoutLoanLeadInput], { nullable: true }),
    __metadata("design:type", Array)
], ContractUpdateManyWithoutLoanLeadInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [contract_create_or_connect_without_loan_lead_input_1.ContractCreateOrConnectWithoutLoanLeadInput], { nullable: true }),
    __metadata("design:type", Array)
], ContractUpdateManyWithoutLoanLeadInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [contract_upsert_with_where_unique_without_loan_lead_input_1.ContractUpsertWithWhereUniqueWithoutLoanLeadInput], { nullable: true }),
    __metadata("design:type", Array)
], ContractUpdateManyWithoutLoanLeadInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_create_many_loan_lead_input_envelope_input_1.ContractCreateManyLoanLeadInputEnvelope, { nullable: true }),
    __metadata("design:type", contract_create_many_loan_lead_input_envelope_input_1.ContractCreateManyLoanLeadInputEnvelope)
], ContractUpdateManyWithoutLoanLeadInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [contract_where_unique_input_1.ContractWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], ContractUpdateManyWithoutLoanLeadInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [contract_where_unique_input_1.ContractWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], ContractUpdateManyWithoutLoanLeadInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [contract_where_unique_input_1.ContractWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], ContractUpdateManyWithoutLoanLeadInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [contract_where_unique_input_1.ContractWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], ContractUpdateManyWithoutLoanLeadInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [contract_update_with_where_unique_without_loan_lead_input_1.ContractUpdateWithWhereUniqueWithoutLoanLeadInput], { nullable: true }),
    __metadata("design:type", Array)
], ContractUpdateManyWithoutLoanLeadInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [contract_update_many_with_where_without_loan_lead_input_1.ContractUpdateManyWithWhereWithoutLoanLeadInput], { nullable: true }),
    __metadata("design:type", Array)
], ContractUpdateManyWithoutLoanLeadInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [contract_scalar_where_input_1.ContractScalarWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], ContractUpdateManyWithoutLoanLeadInput.prototype, "deleteMany", void 0);
ContractUpdateManyWithoutLoanLeadInput = __decorate([
    (0, graphql_2.InputType)()
], ContractUpdateManyWithoutLoanLeadInput);
exports.ContractUpdateManyWithoutLoanLeadInput = ContractUpdateManyWithoutLoanLeadInput;
//# sourceMappingURL=contract-update-many-without-loan-lead.input.js.map