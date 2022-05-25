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
exports.ContractUncheckedCreateNestedManyWithoutContractTypeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const contract_create_without_contract_type_input_1 = require("./contract-create-without-contract-type.input");
const contract_create_or_connect_without_contract_type_input_1 = require("./contract-create-or-connect-without-contract-type.input");
const contract_create_many_contract_type_input_envelope_input_1 = require("./contract-create-many-contract-type-input-envelope.input");
const contract_where_unique_input_1 = require("./contract-where-unique.input");
let ContractUncheckedCreateNestedManyWithoutContractTypeInput = class ContractUncheckedCreateNestedManyWithoutContractTypeInput {
};
__decorate([
    (0, graphql_1.Field)(() => [contract_create_without_contract_type_input_1.ContractCreateWithoutContractTypeInput], { nullable: true }),
    __metadata("design:type", Array)
], ContractUncheckedCreateNestedManyWithoutContractTypeInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [contract_create_or_connect_without_contract_type_input_1.ContractCreateOrConnectWithoutContractTypeInput], { nullable: true }),
    __metadata("design:type", Array)
], ContractUncheckedCreateNestedManyWithoutContractTypeInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_create_many_contract_type_input_envelope_input_1.ContractCreateManyContractTypeInputEnvelope, { nullable: true }),
    __metadata("design:type", contract_create_many_contract_type_input_envelope_input_1.ContractCreateManyContractTypeInputEnvelope)
], ContractUncheckedCreateNestedManyWithoutContractTypeInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [contract_where_unique_input_1.ContractWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], ContractUncheckedCreateNestedManyWithoutContractTypeInput.prototype, "connect", void 0);
ContractUncheckedCreateNestedManyWithoutContractTypeInput = __decorate([
    (0, graphql_2.InputType)()
], ContractUncheckedCreateNestedManyWithoutContractTypeInput);
exports.ContractUncheckedCreateNestedManyWithoutContractTypeInput = ContractUncheckedCreateNestedManyWithoutContractTypeInput;
//# sourceMappingURL=contract-unchecked-create-nested-many-without-contract-type.input.js.map