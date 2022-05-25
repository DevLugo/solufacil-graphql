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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractTypeResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const contract_type_create_input_1 = require("../../@generated/contract-type/contract-type-create.input");
const contract_type_model_1 = require("../../@generated/contract-type/contract-type.model");
const contract_type_service_1 = require("./contract-type.service");
let ContractTypeResolver = class ContractTypeResolver {
    constructor(contractTypeService) {
        this.contractTypeService = contractTypeService;
    }
    async contractTypes() {
        return await this.contractTypeService.getMany();
    }
    async createContractType(data) {
        return await this.contractTypeService.create(data);
    }
};
__decorate([
    (0, graphql_1.Query)(() => [contract_type_model_1.ContractType]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ContractTypeResolver.prototype, "contractTypes", null);
__decorate([
    (0, graphql_1.Mutation)(() => contract_type_model_1.ContractType),
    __param(0, (0, graphql_1.Args)({ name: 'input', type: () => contract_type_create_input_1.ContractTypeCreateInput })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contract_type_create_input_1.ContractTypeCreateInput]),
    __metadata("design:returntype", Promise)
], ContractTypeResolver.prototype, "createContractType", null);
ContractTypeResolver = __decorate([
    (0, graphql_1.Resolver)(() => contract_type_model_1.ContractType),
    __metadata("design:paramtypes", [contract_type_service_1.ContractTypeService])
], ContractTypeResolver);
exports.ContractTypeResolver = ContractTypeResolver;
//# sourceMappingURL=contract-type.resolver.js.map