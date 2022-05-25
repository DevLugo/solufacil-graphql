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
exports.ContractType = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const prisma_graphql_type_decimal_1 = require("prisma-graphql-type-decimal");
const runtime_1 = require("@prisma/client/runtime");
const contract_model_1 = require("../contract/contract.model");
const contract_type_count_output_1 = require("./contract-type-count.output");
let ContractType = class ContractType {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    __metadata("design:type", String)
], ContractType.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], ContractType.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false }),
    __metadata("design:type", Number)
], ContractType.prototype, "monthDuration", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: false }),
    __metadata("design:type", runtime_1.Decimal)
], ContractType.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: false }),
    __metadata("design:type", runtime_1.Decimal)
], ContractType.prototype, "maxRate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], ContractType.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Date)
], ContractType.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => [contract_model_1.Contract], { nullable: true }),
    __metadata("design:type", Array)
], ContractType.prototype, "contract", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_type_count_output_1.ContractTypeCount, { nullable: false }),
    __metadata("design:type", contract_type_count_output_1.ContractTypeCount)
], ContractType.prototype, "_count", void 0);
ContractType = __decorate([
    (0, graphql_2.ObjectType)()
], ContractType);
exports.ContractType = ContractType;
//# sourceMappingURL=contract-type.model.js.map