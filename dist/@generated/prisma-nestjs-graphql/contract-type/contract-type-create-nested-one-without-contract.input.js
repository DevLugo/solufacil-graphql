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
exports.ContractTypeCreateNestedOneWithoutContractInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const contract_type_create_without_contract_input_1 = require("./contract-type-create-without-contract.input");
const contract_type_create_or_connect_without_contract_input_1 = require("./contract-type-create-or-connect-without-contract.input");
const contract_type_where_unique_input_1 = require("./contract-type-where-unique.input");
let ContractTypeCreateNestedOneWithoutContractInput = class ContractTypeCreateNestedOneWithoutContractInput {
};
__decorate([
    (0, graphql_1.Field)(() => contract_type_create_without_contract_input_1.ContractTypeCreateWithoutContractInput, { nullable: true }),
    __metadata("design:type", contract_type_create_without_contract_input_1.ContractTypeCreateWithoutContractInput)
], ContractTypeCreateNestedOneWithoutContractInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_type_create_or_connect_without_contract_input_1.ContractTypeCreateOrConnectWithoutContractInput, { nullable: true }),
    __metadata("design:type", contract_type_create_or_connect_without_contract_input_1.ContractTypeCreateOrConnectWithoutContractInput)
], ContractTypeCreateNestedOneWithoutContractInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_type_where_unique_input_1.ContractTypeWhereUniqueInput, { nullable: true }),
    __metadata("design:type", contract_type_where_unique_input_1.ContractTypeWhereUniqueInput)
], ContractTypeCreateNestedOneWithoutContractInput.prototype, "connect", void 0);
ContractTypeCreateNestedOneWithoutContractInput = __decorate([
    (0, graphql_2.InputType)()
], ContractTypeCreateNestedOneWithoutContractInput);
exports.ContractTypeCreateNestedOneWithoutContractInput = ContractTypeCreateNestedOneWithoutContractInput;
//# sourceMappingURL=contract-type-create-nested-one-without-contract.input.js.map