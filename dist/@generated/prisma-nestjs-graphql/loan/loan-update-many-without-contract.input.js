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
exports.LoanUpdateManyWithoutContractInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const loan_create_without_contract_input_1 = require("./loan-create-without-contract.input");
const loan_create_or_connect_without_contract_input_1 = require("./loan-create-or-connect-without-contract.input");
const loan_upsert_with_where_unique_without_contract_input_1 = require("./loan-upsert-with-where-unique-without-contract.input");
const loan_create_many_contract_input_envelope_input_1 = require("./loan-create-many-contract-input-envelope.input");
const loan_where_unique_input_1 = require("./loan-where-unique.input");
const loan_update_with_where_unique_without_contract_input_1 = require("./loan-update-with-where-unique-without-contract.input");
const loan_update_many_with_where_without_contract_input_1 = require("./loan-update-many-with-where-without-contract.input");
const loan_scalar_where_input_1 = require("./loan-scalar-where.input");
let LoanUpdateManyWithoutContractInput = class LoanUpdateManyWithoutContractInput {
};
__decorate([
    (0, graphql_1.Field)(() => [loan_create_without_contract_input_1.LoanCreateWithoutContractInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanUpdateManyWithoutContractInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_create_or_connect_without_contract_input_1.LoanCreateOrConnectWithoutContractInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanUpdateManyWithoutContractInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_upsert_with_where_unique_without_contract_input_1.LoanUpsertWithWhereUniqueWithoutContractInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanUpdateManyWithoutContractInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_create_many_contract_input_envelope_input_1.LoanCreateManyContractInputEnvelope, { nullable: true }),
    __metadata("design:type", loan_create_many_contract_input_envelope_input_1.LoanCreateManyContractInputEnvelope)
], LoanUpdateManyWithoutContractInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_where_unique_input_1.LoanWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanUpdateManyWithoutContractInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_where_unique_input_1.LoanWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanUpdateManyWithoutContractInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_where_unique_input_1.LoanWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanUpdateManyWithoutContractInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_where_unique_input_1.LoanWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanUpdateManyWithoutContractInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_update_with_where_unique_without_contract_input_1.LoanUpdateWithWhereUniqueWithoutContractInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanUpdateManyWithoutContractInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_update_many_with_where_without_contract_input_1.LoanUpdateManyWithWhereWithoutContractInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanUpdateManyWithoutContractInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_scalar_where_input_1.LoanScalarWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanUpdateManyWithoutContractInput.prototype, "deleteMany", void 0);
LoanUpdateManyWithoutContractInput = __decorate([
    (0, graphql_2.InputType)()
], LoanUpdateManyWithoutContractInput);
exports.LoanUpdateManyWithoutContractInput = LoanUpdateManyWithoutContractInput;
//# sourceMappingURL=loan-update-many-without-contract.input.js.map