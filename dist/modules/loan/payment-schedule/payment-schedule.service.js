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
exports.PaymentScheduleService = void 0;
const common_1 = require("@nestjs/common");
const payment_state_enum_1 = require("../../../@generated/prisma/payment-state.enum");
const prisma_service_1 = require("../../../core/prisma/prisma.service");
let PaymentScheduleService = class PaymentScheduleService {
    constructor(db) {
        this.db = db;
        this.WEEK_SECONDS = 7 * 24 * 60 * 60 * 1000;
    }
    async createPaymentSchedule(firstDayPay, weeksDuration, loanId) {
        let i = 0;
        const weekSeconds = this.WEEK_SECONDS;
        const loan = await this.db.loan.findUnique({
            where: { id: loanId },
            include: { loanType: true }
        });
        let nextDateToPay = firstDayPay;
        const transactions = [];
        while (i < weeksDuration) {
            nextDateToPay = new Date(nextDateToPay.getTime() + weekSeconds);
            transactions.push(this.db.paymentSchedule.create({
                data: {
                    amountToPay: loan.weeklyPaymentAmount,
                    dueDate: nextDateToPay,
                    paidAmount: 0,
                    numeration: i + 1,
                    status: payment_state_enum_1.PaymentState.PENDING,
                    loan: {
                        connect: { id: loan.id }
                    }
                }
            }));
            i++;
        }
        await this.db.$transaction(transactions);
    }
    async getPaymentSchedules(loanId) {
        return await this.db.paymentSchedule.findMany({
            where: { loanId },
            orderBy: { numeration: "asc" }
        });
    }
    async getPaymentSchedulesWhere(where) {
        return await this.db.paymentSchedule.findMany({ where });
    }
    async rangeResume(dateStart, dateEnd) {
        const resume = {
            expenses: Number(await this.rangeExpenses(dateStart, dateEnd)),
            newLoans: await this.rangeNewLoans(dateStart, dateEnd),
            paidOut: Number(await this.rangePaidOut(dateStart, dateEnd)),
            profit: Number(await this.rangeProfit(dateStart, dateEnd)),
            returnOfCapital: Number(await this.rangeReturnOfCapital(dateStart, dateEnd)),
        };
        return resume;
    }
    async rangeProfit(dateStart, dateEnd) {
        const profit = await this.db.paymentSchedule.aggregate({
            where: {
                dueDate: {
                    gte: dateStart,
                    lte: dateEnd,
                },
                status: {
                    in: ["PAID_OUT", "PARTIALLY_PAID"]
                }
            },
            _sum: {
                profit: true
            }
        });
        return profit._sum.profit || 0;
    }
    async rangePaidOut(dateStart, dateEnd) {
        const paidOut = await this.db.paymentSchedule.aggregate({
            where: {
                dueDate: {
                    gte: dateStart,
                    lte: dateEnd,
                },
                status: {
                    in: ["PAID_OUT", "PARTIALLY_PAID"]
                }
            },
            _sum: {
                paidAmount: true
            }
        });
        return paidOut._sum.paidAmount || 0;
    }
    async rangeReturnOfCapital(dateStart, dateEnd) {
        const returnOfCapital = await this.db.paymentSchedule.aggregate({
            where: {
                dueDate: {
                    gte: dateStart,
                    lte: dateEnd,
                },
                status: {
                    in: ["PAID_OUT", "PARTIALLY_PAID"]
                }
            },
            _sum: {
                returnToCapital: true
            }
        });
        return returnOfCapital._sum.returnToCapital || 0;
    }
    async rangeNewLoans(dateStart, dateEnd) {
        const newLoans = await this.db.loan.aggregate({
            where: {
                signDate: {
                    gte: dateStart,
                    lte: dateEnd,
                }
            },
            _count: {
                id: true
            }
        });
        return newLoans._count.id || 0;
    }
    async rangeExpenses(dateStart, dateEnd) {
        const newLoans = await this.db.expenses.aggregate({
            where: {
                payedAt: {
                    gte: dateStart,
                    lte: dateEnd,
                },
                status: {
                    in: ["PAID_OUT", "PARTIALLY_PAID"]
                }
            },
            _sum: {
                amountToPay: true
            }
        });
        return newLoans._sum.amountToPay || 0;
    }
};
PaymentScheduleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PaymentScheduleService);
exports.PaymentScheduleService = PaymentScheduleService;
//# sourceMappingURL=payment-schedule.service.js.map