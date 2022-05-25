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
exports.BorrowerResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const borrower_where_input_1 = require("../../@generated/borrower/borrower-where.input");
const borrower_create_input_1 = require("../../@generated/borrower/borrower-create.input");
const borrower_model_1 = require("../../@generated/borrower/borrower.model");
const GqlAuthGuard_1 = require("../auth/GqlAuthGuard");
const borrower_service_1 = require("./borrower.service");
let BorrowerResolver = class BorrowerResolver {
    constructor(borrowerService) {
        this.borrowerService = borrowerService;
    }
    async borrowers(where) {
        return await this.borrowerService.getMany(where);
    }
    async createBorrower(data) {
        return await this.borrowerService.create(data);
    }
};
__decorate([
    (0, graphql_1.Query)(() => [borrower_model_1.Borrower]),
    __param(0, (0, graphql_1.Args)({ name: 'where', type: () => borrower_where_input_1.BorrowerWhereInput })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [borrower_where_input_1.BorrowerWhereInput]),
    __metadata("design:returntype", Promise)
], BorrowerResolver.prototype, "borrowers", null);
__decorate([
    (0, graphql_1.Mutation)(() => borrower_model_1.Borrower),
    __param(0, (0, graphql_1.Args)({ name: 'input', type: () => borrower_create_input_1.BorrowerCreateInput })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [borrower_create_input_1.BorrowerCreateInput]),
    __metadata("design:returntype", Promise)
], BorrowerResolver.prototype, "createBorrower", null);
BorrowerResolver = __decorate([
    (0, common_1.UseGuards)(GqlAuthGuard_1.GqlAuthGuard),
    (0, graphql_1.Resolver)(() => borrower_model_1.Borrower),
    __metadata("design:paramtypes", [borrower_service_1.BorrowerService])
], BorrowerResolver);
exports.BorrowerResolver = BorrowerResolver;
//# sourceMappingURL=borrower.resolver.js.map