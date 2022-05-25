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
exports.ContractTypeCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const Validator = require("class-validator");
const graphql_4 = require("@nestjs/graphql");
const runtime_1 = require("@prisma/client/runtime");
const prisma_graphql_type_decimal_1 = require("prisma-graphql-type-decimal");
const contract_create_nested_many_without_contract_type_input_1 = require("../contract/contract-create-nested-many-without-contract-type.input");
let ContractTypeCreateInput = class ContractTypeCreateInput {
};
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", String)
], ContractTypeCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    Validator.MinLength(3),
    __metadata("design:type", String)
], ContractTypeCreateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false }),
    __metadata("design:type", Number)
], ContractTypeCreateInput.prototype, "monthDuration", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: false }),
    __metadata("design:type", runtime_1.Decimal)
], ContractTypeCreateInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: false }),
    __metadata("design:type", runtime_1.Decimal)
], ContractTypeCreateInput.prototype, "maxRate", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], ContractTypeCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], ContractTypeCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_create_nested_many_without_contract_type_input_1.ContractCreateNestedManyWithoutContractTypeInput, { nullable: true }),
    __metadata("design:type", contract_create_nested_many_without_contract_type_input_1.ContractCreateNestedManyWithoutContractTypeInput)
], ContractTypeCreateInput.prototype, "contract", void 0);
ContractTypeCreateInput = __decorate([
    (0, graphql_2.InputType)()
], ContractTypeCreateInput);
exports.ContractTypeCreateInput = ContractTypeCreateInput;
//# sourceMappingURL=contract-type-create.input.js.map