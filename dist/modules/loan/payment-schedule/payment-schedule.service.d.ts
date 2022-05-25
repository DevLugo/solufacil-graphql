import { PaymentScheduleWhereInput } from '../../../@generated/payment-schedule/payment-schedule-where.input';
import { PrismaService } from '../../../core/prisma/prisma.service';
import { IResumePayload } from './payloads/resume';
export declare class PaymentScheduleService {
    private readonly db;
    constructor(db: PrismaService);
    WEEK_SECONDS: number;
    createPaymentSchedule(firstDayPay: Date, weeksDuration: number, loanId: string): Promise<void>;
    getPaymentSchedules(loanId: string): Promise<import(".prisma/client").PaymentSchedule[]>;
    getPaymentSchedulesWhere(where: PaymentScheduleWhereInput): Promise<import(".prisma/client").PaymentSchedule[]>;
    rangeResume(dateStart: Date, dateEnd: Date): Promise<IResumePayload>;
    rangeProfit(dateStart: Date, dateEnd: Date): Promise<0 | import("@prisma/client/runtime").Decimal>;
    rangePaidOut(dateStart: Date, dateEnd: Date): Promise<0 | import("@prisma/client/runtime").Decimal>;
    rangeReturnOfCapital(dateStart: Date, dateEnd: Date): Promise<0 | import("@prisma/client/runtime").Decimal>;
    rangeNewLoans(dateStart: Date, dateEnd: Date): Promise<number>;
    rangeExpenses(dateStart: Date, dateEnd: Date): Promise<0 | import("@prisma/client/runtime").Decimal>;
}
