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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../core/prisma/prisma.service");
const loan_payment_service_1 = require("./loan-payment/loan-payment.service");
const payment_schedule_service_1 = require("./payment-schedule/payment-schedule.service");
const loan_state_enum_1 = require("../../@generated/prisma/loan-state.enum");
let LoanService = class LoanService {
    constructor(db, loanPaymentService, paymentScheduleService) {
        this.db = db;
        this.loanPaymentService = loanPaymentService;
        this.paymentScheduleService = paymentScheduleService;
    }
    async getMany(where) {
        return await this.db.loan.findMany({ where });
    }
    async get(id) {
        return await this.db.loan.findUnique({
            where: { id },
            include: {
                payments: {
                    include: {
                        employee: true
                    }
                },
                employee: {
                    include: {
                        user: true
                    }
                },
            }
        });
    }
    async createLoanProccess(data) {
        const contract = await this.db.contract.findFirst({
            where: {
                id: data.contract.connect.id
            },
            include: {
                contractType: true
            }
        });
        if (contract.contractType.amount < data.amountToPay)
            throw new Error('La cantidad solicitada es mayor a la otorgada en el contrato: TODO: validar que solo tenga un credito activo a la vez');
        const { firstPaymentDate } = data, cleanedData = __rest(data, ["firstPaymentDate"]);
        const loanType = await this.db.loantype.findFirst({ where: { id: data.loanType.connect.id } });
        const weecklyPayment = (+data.amountToPay * (1 + loanType.rate)) / loanType.weekDuration;
        const loan = await this.db.loan.create({
            data: Object.assign(Object.assign({}, cleanedData), { status: loan_state_enum_1.LoanState.APPROVED, weeklyPaymentAmount: weecklyPayment })
        });
        await this.paymentScheduleService.createPaymentSchedule(new Date(data.firstPaymentDate), loanType.weekDuration, loan.id);
        return await this.db.loan.findUnique({ where: { id: loan.id }, include: { paymentSchedule: true, employee: { include: { user: true } } } });
    }
    async create(data) {
        return await this.db.loan.create({ data });
    }
};
LoanService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        loan_payment_service_1.LoanPaymentService,
        payment_schedule_service_1.PaymentScheduleService])
], LoanService);
exports.LoanService = LoanService;
//# sourceMappingURL=loan.service.js.map