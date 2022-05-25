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
exports.ContractTypeUpsertWithoutContractInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const contract_type_update_without_contract_input_1 = require("./contract-type-update-without-contract.input");
const contract_type_create_without_contract_input_1 = require("./contract-type-create-without-contract.input");
let ContractTypeUpsertWithoutContractInput = class ContractTypeUpsertWithoutContractInput {
};
__decorate([
    (0, graphql_1.Field)(() => contract_type_update_without_contract_input_1.ContractTypeUpdateWithoutContractInput, { nullable: false }),
    __metadata("design:type", contract_type_update_without_contract_input_1.ContractTypeUpdateWithoutContractInput)
], ContractTypeUpsertWithoutContractInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_type_create_without_contract_input_1.ContractTypeCreateWithoutContractInput, { nullable: false }),
    __metadata("design:type", contract_type_create_without_contract_input_1.ContractTypeCreateWithoutContractInput)
], ContractTypeUpsertWithoutContractInput.prototype, "create", void 0);
ContractTypeUpsertWithoutContractInput = __decorate([
    (0, graphql_2.InputType)()
], ContractTypeUpsertWithoutContractInput);
exports.ContractTypeUpsertWithoutContractInput = ContractTypeUpsertWithoutContractInput;
//# sourceMappingURL=contract-type-upsert-without-contract.input.js.map