"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowerModule = void 0;
const common_1 = require("@nestjs/common");
const borrower_service_1 = require("./borrower.service");
const borrower_resolver_1 = require("./borrower.resolver");
const prisma_module_1 = require("../../core/prisma/prisma.module");
const auth_module_1 = require("../auth/auth.module");
let BorrowerModule = class BorrowerModule {
};
BorrowerModule = __decorate([
    (0, common_1.Module)({
        providers: [borrower_service_1.BorrowerService, borrower_resolver_1.BorrowerResolver],
        imports: [prisma_module_1.PrismaModule, auth_module_1.AuthModule]
    })
], BorrowerModule);
exports.BorrowerModule = BorrowerModule;
//# sourceMappingURL=borrower.module.js.map