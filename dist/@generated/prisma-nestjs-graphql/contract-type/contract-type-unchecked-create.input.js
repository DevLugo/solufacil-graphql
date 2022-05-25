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
exports.ContractTypeUncheckedCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const Validator = require("class-validator");
const graphql_3 = require("@nestjs/graphql");
const runtime_1 = require("@prisma/client/runtime");
const prisma_graphql_type_decimal_1 = require("prisma-graphql-type-decimal");
const graphql_4 = require("@nestjs/graphql");
const contract_unchecked_create_nested_many_without_contract_type_input_1 = require("../contract/contract-unchecked-create-nested-many-without-contract-type.input");
let ContractTypeUncheckedCreateInput = class ContractTypeUncheckedCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], ContractTypeUncheckedCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    Validator.MinLength(3),
    __metadata("design:type", String)
], ContractTypeUncheckedCreateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], ContractTypeUncheckedCreateInput.prototype, "monthDuration", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: false }),
    __metadata("design:type", runtime_1.Decimal)
], ContractTypeUncheckedCreateInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: false }),
    __metadata("design:type", runtime_1.Decimal)
], ContractTypeUncheckedCreateInput.prototype, "maxRate", void 0);
__decorate([
    (0, graphql_4.HideField)(),
    __metadata("design:type", Object)
], ContractTypeUncheckedCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_4.HideField)(),
    __metadata("design:type", Object)
], ContractTypeUncheckedCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_unchecked_create_nested_many_without_contract_type_input_1.ContractUncheckedCreateNestedManyWithoutContractTypeInput, { nullable: true }),
    __metadata("design:type", contract_unchecked_create_nested_many_without_contract_type_input_1.ContractUncheckedCreateNestedManyWithoutContractTypeInput)
], ContractTypeUncheckedCreateInput.prototype, "contract", void 0);
ContractTypeUncheckedCreateInput = __decorate([
    (0, graphql_2.InputType)()
], ContractTypeUncheckedCreateInput);
exports.ContractTypeUncheckedCreateInput = ContractTypeUncheckedCreateInput;
//# sourceMappingURL=contract-type-unchecked-create.input.js.map