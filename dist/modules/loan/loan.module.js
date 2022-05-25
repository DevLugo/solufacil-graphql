"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanModule = void 0;
const common_1 = require("@nestjs/common");
const loan_service_1 = require("./loan.service");
const loan_resolver_1 = require("./loan.resolver");
const prisma_module_1 = require("../../core/prisma/prisma.module");
const auth_module_1 = require("../auth/auth.module");
const loan_payment_service_1 = require("./loan-payment/loan-payment.service");
const payment_schedule_service_1 = require("./payment-schedule/payment-schedule.service");
const loan_type_service_1 = require("./loan-type/loan-type.service");
const utils_service_1 = require("./utils.service");
const payment_schedule_resolver_1 = require("./payment-schedule/payment-schedule.resolver");
const borrower_service_1 = require("../borrower/borrower.service");
let LoanModule = class LoanModule {
};
LoanModule = __decorate([
    (0, common_1.Module)({
        providers: [loan_service_1.LoanService, loan_payment_service_1.LoanPaymentService, borrower_service_1.BorrowerService, utils_service_1.UtilsService, loan_type_service_1.LoanTypeService, loan_resolver_1.LoanResolver, payment_schedule_resolver_1.PaymentScheduleResolver, payment_schedule_service_1.PaymentScheduleService],
        imports: [prisma_module_1.PrismaModule, auth_module_1.AuthModule]
    })
], LoanModule);
exports.LoanModule = LoanModule;
//# sourceMappingURL=loan.module.js.map