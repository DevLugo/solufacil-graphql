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
exports.FindFirstContractTypeArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const contract_type_where_input_1 = require("./contract-type-where.input");
const contract_type_order_by_with_relation_input_1 = require("./contract-type-order-by-with-relation.input");
const contract_type_where_unique_input_1 = require("./contract-type-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const contract_type_scalar_field_enum_1 = require("./contract-type-scalar-field.enum");
let FindFirstContractTypeArgs = class FindFirstContractTypeArgs {
};
__decorate([
    (0, graphql_1.Field)(() => contract_type_where_input_1.ContractTypeWhereInput, { nullable: true }),
    __metadata("design:type", contract_type_where_input_1.ContractTypeWhereInput)
], FindFirstContractTypeArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [contract_type_order_by_with_relation_input_1.ContractTypeOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], FindFirstContractTypeArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_type_where_unique_input_1.ContractTypeWhereUniqueInput, { nullable: true }),
    __metadata("design:type", contract_type_where_unique_input_1.ContractTypeWhereUniqueInput)
], FindFirstContractTypeArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindFirstContractTypeArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindFirstContractTypeArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [contract_type_scalar_field_enum_1.ContractTypeScalarFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], FindFirstContractTypeArgs.prototype, "distinct", void 0);
FindFirstContractTypeArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindFirstContractTypeArgs);
exports.FindFirstContractTypeArgs = FindFirstContractTypeArgs;
//# sourceMappingURL=find-first-contract-type.args.js.map