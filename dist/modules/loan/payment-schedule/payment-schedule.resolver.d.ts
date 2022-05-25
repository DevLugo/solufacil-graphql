import { PaymentScheduleWhereInput } from 'src/@generated/payment-schedule/payment-schedule-where.input';
import { PaymentSchedule } from 'src/@generated/payment-schedule/payment-schedule.model';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { BorrowerService } from 'src/modules/borrower/borrower.service';
import { LoanService } from '../loan.service';
import { PaymentBreakDown, UtilsService } from '../utils.service';
import { RangeDaysInput } from './inputs/RangeDaysInput';
import { IResumePayload } from './payloads/resume';
import { PaymentScheduleService } from './payment-schedule.service';
export declare class PaymentScheduleResolver {
    private readonly UtilsService;
    private readonly LoanService;
    private readonly BorrowerService;
    private readonly _db;
    private readonly LoanPaymentScheduleService;
    constructor(UtilsService: UtilsService, LoanService: LoanService, BorrowerService: BorrowerService, _db: PrismaService, LoanPaymentScheduleService: PaymentScheduleService);
    paymentBreakDown(root: PaymentSchedule): Promise<PaymentBreakDown>;
    loan(root: PaymentSchedule): Promise<import(".prisma/client").Loan & {
        payments: (import(".prisma/client").LoanPayment & {
            employee: import(".prisma/client").Employee;
        })[];
        employee: import(".prisma/client").Employee & {
            user: import(".prisma/client").User;
        };
    }>;
    pendingAmount(root: PaymentSchedule): Promise<number>;
    borrower(root: PaymentSchedule): Promise<import(".prisma/client").Borrower & {
        phones: import(".prisma/client").Phone[];
    }>;
    paymentSchedulesWhere(where: PaymentScheduleWhereInput): Promise<import(".prisma/client").PaymentSchedule[]>;
    rangeResume(where: RangeDaysInput): Promise<IResumePayload>;
}
