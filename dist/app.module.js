"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const core_module_1 = require("./core/core.module");
const social_auth_module_1 = require("./social-auth/social-auth.module");
const prisma_service_1 = require("./core/prisma/prisma.service");
const contract_type_module_1 = require("./modules/contract-type/contract-type.module");
const borrower_module_1 = require("./modules/borrower/borrower.module");
const employee_module_1 = require("./modules/employee/employee.module");
const contract_module_1 = require("./modules/contract/contract.module");
const loan_module_1 = require("./modules/loan/loan.module");
const auth_module_1 = require("./modules/auth/auth.module");
const phone_module_1 = require("./modules/phone/phone.module");
const local_module_1 = require("./modules/local/local.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            social_auth_module_1.SocialAuthModule,
            core_module_1.CoreModule,
            contract_type_module_1.ContractTypeModule,
            borrower_module_1.BorrowerModule,
            employee_module_1.EmployeeModule,
            contract_module_1.ContractModule,
            loan_module_1.LoanModule,
            social_auth_module_1.SocialAuthModule,
            auth_module_1.AuthModule,
            phone_module_1.PhoneModule,
            local_module_1.LocalModule,
        ],
        providers: [prisma_service_1.PrismaService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map