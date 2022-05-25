"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractModule = void 0;
const common_1 = require("@nestjs/common");
const contract_service_1 = require("./contract.service");
const contract_resolver_1 = require("./contract.resolver");
const prisma_module_1 = require("../../core/prisma/prisma.module");
const auth_module_1 = require("../auth/auth.module");
let ContractModule = class ContractModule {
};
ContractModule = __decorate([
    (0, common_1.Module)({
        providers: [contract_service_1.ContractService, contract_resolver_1.ContractResolver],
        imports: [prisma_module_1.PrismaModule, auth_module_1.AuthModule]
    })
], ContractModule);
exports.ContractModule = ContractModule;
//# sourceMappingURL=contract.module.js.map