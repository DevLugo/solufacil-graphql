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
exports.PhoneResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const phone_create_input_1 = require("../../@generated/phone/phone-create.input");
const phone_model_1 = require("../../@generated/phone/phone.model");
const GqlAuthGuard_1 = require("../auth/GqlAuthGuard");
const phone_service_1 = require("./phone.service");
let PhoneResolver = class PhoneResolver {
    constructor(_phoneService) {
        this._phoneService = _phoneService;
    }
    async createPhone(data) {
        return await this._phoneService.createPhone(data);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => phone_model_1.Phone),
    __param(0, (0, graphql_1.Args)({ name: 'input', type: () => phone_create_input_1.PhoneCreateInput })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [phone_create_input_1.PhoneCreateInput]),
    __metadata("design:returntype", Promise)
], PhoneResolver.prototype, "createPhone", null);
PhoneResolver = __decorate([
    (0, common_1.UseGuards)(GqlAuthGuard_1.GqlAuthGuard),
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [phone_service_1.PhoneService])
], PhoneResolver);
exports.PhoneResolver = PhoneResolver;
//# sourceMappingURL=phone.resolver.js.map