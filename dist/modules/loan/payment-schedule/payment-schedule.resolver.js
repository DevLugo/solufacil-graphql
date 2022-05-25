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
exports.PaymentScheduleResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const borrower_model_1 = require("../../../@generated/borrower/borrower.model");
const loan_model_1 = require("../../../@generated/loan/loan.model");
const payment_schedule_where_input_1 = require("../../../@generated/payment-schedule/payment-schedule-where.input");
const payment_schedule_model_1 = require("../../../@generated/payment-schedule/payment-schedule.model");
const prisma_service_1 = require("../../../core/prisma/prisma.service");
const borrower_service_1 = require("../../borrower/borrower.service");
const loan_service_1 = require("../loan.service");
const utils_service_1 = require("../utils.service");
const RangeDaysInput_1 = require("./inputs/RangeDaysInput");
const resume_1 = require("./payloads/resume");
const payment_schedule_service_1 = require("./payment-schedule.service");
let PaymentScheduleResolver = class PaymentScheduleResolver {
    constructor(UtilsService, LoanService, BorrowerService, _db, LoanPaymentScheduleService) {
        this.UtilsService = UtilsService;
        this.LoanService = LoanService;
        this.BorrowerService = BorrowerService;
        this._db = _db;
        this.LoanPaymentScheduleService = LoanPaymentScheduleService;
    }
    async paymentBreakDown(root) {
        const { amountToPay } = root;
        const data = await this._db.loan.findFirst({
            where: { id: root.loanId },
            include: {
                loanType: true
            }
        });
        const rate = data.loanType.rate;
        return this.UtilsService.paymentBreakDown(+amountToPay, rate);
    }
    async loan(root) {
        return this.LoanService.get(root.loanId);
    }
    async pendingAmount(root) {
        const payment = await this._db.paymentSchedule.findUnique({
            where: {
                id: root.id
            }
        });
        return Number(payment.amountToPay) - Number(payment.paidAmount);
    }
    async borrower(root) {
        const data = await this._db.loan.findUnique({
            where: {
                id: root.loanId,
            },
            include: {
                contract: {
                    include: {
                        borrower: {
                            include: {
                                phones: true
                            }
                        }
                    }
                }
            }
        });
        return data.contract.borrower;
    }
    async paymentSchedulesWhere(where) {
        return await this.LoanPaymentScheduleService.getPaymentSchedulesWhere(where);
    }
    async rangeResume(where) {
        const { dateStart, dateEnd } = where;
        return await this.LoanPaymentScheduleService
            .rangeResume(new Date(dateStart), new Date(dateEnd));
    }
};
__decorate([
    (0, graphql_1.ResolveField)(_ => utils_service_1.PaymentBreakDown),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [payment_schedule_model_1.PaymentSchedule]),
    __metadata("design:returntype", Promise)
], PaymentScheduleResolver.prototype, "paymentBreakDown", null);
__decorate([
    (0, graphql_1.ResolveField)(_ => loan_model_1.Loan),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [payment_schedule_model_1.PaymentSchedule]),
    __metadata("design:returntype", Promise)
], PaymentScheduleResolver.prototype, "loan", null);
__decorate([
    (0, graphql_1.ResolveField)(_ => Number),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [payment_schedule_model_1.PaymentSchedule]),
    __metadata("design:returntype", Promise)
], PaymentScheduleResolver.prototype, "pendingAmount", null);
__decorate([
    (0, graphql_1.ResolveField)(_ => borrower_model_1.Borrower),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [payment_schedule_model_1.PaymentSchedule]),
    __metadata("design:returntype", Promise)
], PaymentScheduleResolver.prototype, "borrower", null);
__decorate([
    (0, graphql_1.Query)(() => [payment_schedule_model_1.PaymentSchedule]),
    __param(0, (0, graphql_1.Args)({ name: 'where', type: () => payment_schedule_where_input_1.PaymentScheduleWhereInput })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [payment_schedule_where_input_1.PaymentScheduleWhereInput]),
    __metadata("design:returntype", Promise)
], PaymentScheduleResolver.prototype, "paymentSchedulesWhere", null);
__decorate([
    (0, graphql_1.Query)(() => resume_1.IResumePayload),
    __param(0, (0, graphql_1.Args)({ name: 'where', type: () => RangeDaysInput_1.RangeDaysInput })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RangeDaysInput_1.RangeDaysInput]),
    __metadata("design:returntype", Promise)
], PaymentScheduleResolver.prototype, "rangeResume", null);
PaymentScheduleResolver = __decorate([
    (0, graphql_1.Resolver)(() => payment_schedule_model_1.PaymentSchedule),
    __metadata("design:paramtypes", [utils_service_1.UtilsService,
        loan_service_1.LoanService,
        borrower_service_1.BorrowerService,
        prisma_service_1.PrismaService,
        payment_schedule_service_1.PaymentScheduleService])
], PaymentScheduleResolver);
exports.PaymentScheduleResolver = PaymentScheduleResolver;
//# sourceMappingURL=payment-schedule.resolver.js.map