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
exports.ContractResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const contract_where_input_1 = require("../../@generated/contract/contract-where.input");
const contract_model_1 = require("../../@generated/contract/contract.model");
const GqlAuthGuard_1 = require("../auth/GqlAuthGuard");
const contract_service_1 = require("./contract.service");
const contractCreateInput_1 = require("./inputs/contractCreateInput");
let ContractResolver = class ContractResolver {
    constructor(ContractService) {
        this.ContractService = ContractService;
    }
    async contracts(where) {
        return await this.ContractService.getMany(where);
    }
    async createContract(data) {
        return await this.ContractService.create(data);
    }
};
__decorate([
    (0, graphql_1.Query)(() => [contract_model_1.Contract]),
    __param(0, (0, graphql_1.Args)({ name: 'where', type: () => contract_where_input_1.ContractWhereInput })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contract_where_input_1.ContractWhereInput]),
    __metadata("design:returntype", Promise)
], ContractResolver.prototype, "contracts", null);
__decorate([
    (0, graphql_1.Mutation)(() => contract_model_1.Contract),
    __param(0, (0, graphql_1.Args)({ name: 'input', type: () => contractCreateInput_1.ContractCreateInput })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contractCreateInput_1.ContractCreateInput]),
    __metadata("design:returntype", Promise)
], ContractResolver.prototype, "createContract", null);
ContractResolver = __decorate([
    (0, common_1.UseGuards)(GqlAuthGuard_1.GqlAuthGuard),
    (0, graphql_1.Resolver)(() => contract_model_1.Contract),
    __metadata("design:paramtypes", [contract_service_1.ContractService])
], ContractResolver);
exports.ContractResolver = ContractResolver;
//# sourceMappingURL=contract.resolver.js.map