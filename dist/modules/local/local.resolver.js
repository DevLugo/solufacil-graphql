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
exports.LocalResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const local_create_input_1 = require("../../@generated/local/local-create.input");
const local_where_input_1 = require("../../@generated/local/local-where.input");
const local_model_1 = require("../../@generated/local/local.model");
const local_service_1 = require("./local.service");
let LocalResolver = class LocalResolver {
    constructor(LocaService) {
        this.LocaService = LocaService;
    }
    async createLocal(data) {
        return await this.LocaService.create(data);
    }
    async locals(where) {
        return await this.LocaService.getMany(where);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => local_model_1.Local),
    __param(0, (0, graphql_1.Args)({ name: 'input', type: () => local_create_input_1.LocalCreateInput })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [local_create_input_1.LocalCreateInput]),
    __metadata("design:returntype", Promise)
], LocalResolver.prototype, "createLocal", null);
__decorate([
    (0, graphql_1.Query)(() => [local_model_1.Local]),
    __param(0, (0, graphql_1.Args)({ name: 'where', type: () => local_where_input_1.LocalWhereInput })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [local_where_input_1.LocalWhereInput]),
    __metadata("design:returntype", Promise)
], LocalResolver.prototype, "locals", null);
LocalResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [local_service_1.LocalService])
], LocalResolver);
exports.LocalResolver = LocalResolver;
//# sourceMappingURL=local.resolver.js.map