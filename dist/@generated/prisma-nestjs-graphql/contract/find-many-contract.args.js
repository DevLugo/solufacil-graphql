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
exports.FindManyContractArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const contract_where_input_1 = require("./contract-where.input");
const contract_order_by_with_relation_input_1 = require("./contract-order-by-with-relation.input");
const contract_where_unique_input_1 = require("./contract-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const contract_scalar_field_enum_1 = require("./contract-scalar-field.enum");
let FindManyContractArgs = class FindManyContractArgs {
};
__decorate([
    (0, graphql_1.Field)(() => contract_where_input_1.ContractWhereInput, { nullable: true }),
    __metadata("design:type", contract_where_input_1.ContractWhereInput)
], FindManyContractArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [contract_order_by_with_relation_input_1.ContractOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], FindManyContractArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_where_unique_input_1.ContractWhereUniqueInput, { nullable: true }),
    __metadata("design:type", contract_where_unique_input_1.ContractWhereUniqueInput)
], FindManyContractArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindManyContractArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindManyContractArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [contract_scalar_field_enum_1.ContractScalarFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], FindManyContractArgs.prototype, "distinct", void 0);
FindManyContractArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindManyContractArgs);
exports.FindManyContractArgs = FindManyContractArgs;
//# sourceMappingURL=find-many-contract.args.js.map