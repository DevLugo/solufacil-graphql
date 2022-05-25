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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanPaymentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../core/prisma/prisma.service");
const payment_state_enum_1 = require("../../../@generated/prisma/payment-state.enum");
const utils_service_1 = require("../utils.service");
let LoanPaymentService = class LoanPaymentService {
    constructor(UtilsService, db) {
        this.UtilsService = UtilsService;
        this.db = db;
    }
    async getMany(where) {
        return await this.db.loanPayment.findMany({
            where
        });
    }
    async create(data) {
        return await this.db.loanPayment.create({ data });
    }
    async addPaymentToLoan(data) {
        let amountForPayment = Number(data.amount);
        const loan = await this.db.loan.findUnique({ where: {
                id: data.loanId,
            },
            include: { loanType: true }
        });
        let getNextPayments = await this.db.paymentSchedule.findMany({
            where: {
                status: { not: payment_state_enum_1.PaymentState.PAID_OUT },
                loanId: data.loanId
            },
            orderBy: { numeration: "asc" }
        });
        if (!getNextPayments.length)
            throw new Error('No pending payments for this loan');
        const loanId = getNextPayments[0].loanId;
        const bulkDbActions = [];
        const paymentSchedulesIds = [];
        while (amountForPayment) {
            const nextPayment = getNextPayments[0];
            const pendingAmount = (Number(nextPayment.amountToPay) - Number(nextPayment.paidAmount));
            const coverFullAmount = Number(amountForPayment) >= pendingAmount;
            const status = coverFullAmount ? payment_state_enum_1.PaymentState.PAID_OUT : payment_state_enum_1.PaymentState.PARTIALLY_PAID;
            const paidAmount = coverFullAmount ? pendingAmount : Number(amountForPayment);
            amountForPayment = Number(amountForPayment) - Number(paidAmount);
            const breakDown = this.UtilsService.paymentBreakDown(amountForPayment, loan.loanType.rate);
            const { returnOfCapital, profit } = breakDown;
            bulkDbActions.push(this.db.paymentSchedule.update({
                data: {
                    status,
                    paidAmount,
                    profit: Number(nextPayment.profit) + Number(profit),
                    returnToCapital: Number(nextPayment.returnToCapital) + Number(returnOfCapital),
                },
                where: { id: nextPayment.id }
            }));
            paymentSchedulesIds.push(nextPayment.id);
            getNextPayments.shift();
        }
        bulkDbActions.push(this.db.loanPayment.create({
            data: {
                amount: Number(data.amount),
                date: new Date(String(data.paidDate)),
                comments: String(data.details),
                paymentSchedules: { connect: paymentSchedulesIds.map(id => {
                        return { id };
                    })
                },
                loan: { connect: { id: loanId } },
                employee: { connect: { id: data.employeeId } }
            }
        }));
        await this.db.$transaction(bulkDbActions);
    }
    async getTotalPaidAmount(loanId) {
        const result = await this.db.loanPayment.aggregate({
            _sum: { amount: true },
            where: { loanId }
        });
        return result._sum.amount || 0;
    }
    async gePayments(loanId) {
        return await this.db.loanPayment.findMany({
            where: { loanId },
            orderBy: { createdAt: "asc" }
        });
    }
    async createPayment(data) {
        return await this.db.loanPayment.create({ data });
    }
};
LoanPaymentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [utils_service_1.UtilsService,
        prisma_service_1.PrismaService])
], LoanPaymentService);
exports.LoanPaymentService = LoanPaymentService;
//# sourceMappingURL=loan-payment.service.js.map