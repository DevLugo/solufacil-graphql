import { LoanWhereInput } from '../../@generated/loan/loan-where.input';
import { LoanCreateInput } from '../../@generated/loan/loan-create.input';
import { PrismaService } from '../../core/prisma/prisma.service';
import { LoanPaymentService } from './loan-payment/loan-payment.service';
import { CustomCreateLoanInput } from './CustomCreateLoanInput';
import { PaymentScheduleService } from './payment-schedule/payment-schedule.service';
export declare class LoanService {
    private readonly db;
    private readonly loanPaymentService;
    private readonly paymentScheduleService;
    constructor(db: PrismaService, loanPaymentService: LoanPaymentService, paymentScheduleService: PaymentScheduleService);
    getMany(where: LoanWhereInput): Promise<import(".prisma/client").Loan[]>;
    get(id: string): Promise<import(".prisma/client").Loan & {
        payments: (import(".prisma/client").LoanPayment & {
            employee: import(".prisma/client").Employee;
        })[];
        employee: import(".prisma/client").Employee & {
            user: import(".prisma/client").User;
        };
    }>;
    createLoanProccess(data: CustomCreateLoanInput): Promise<import(".prisma/client").Loan & {
        employee: import(".prisma/client").Employee & {
            user: import(".prisma/client").User;
        };
        paymentSchedule: import(".prisma/client").PaymentSchedule[];
    }>;
    create(data: LoanCreateInput): Promise<import(".prisma/client").Loan>;
}
