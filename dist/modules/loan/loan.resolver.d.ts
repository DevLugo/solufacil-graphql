import { LoantypeCreateInput } from '../../@generated/loantype/loantype-create.input';
import { LoanPaymentCreateInput } from '../../@generated/loan-payment/loan-payment-create.input';
import { Loan } from '../../@generated/loan/loan.model';
import { LoanPaymentService } from './loan-payment/loan-payment.service';
import { LoanTypeService } from './loan-type/loan-type.service';
import { LoanService } from './loan.service';
import { LoanPaymentWhereInput } from '../../@generated/loan-payment/loan-payment-where.input';
import { LoantypeWhereInput } from '../../@generated/loantype/loantype-where.input';
import { LoanWhereInput } from '../../@generated/loan/loan-where.input';
import { CustomCreateLoanInput } from './CustomCreateLoanInput';
import { LoanPaymentUpdateInput } from '../loan/loan-payment/inputs/UpdatePaymentInput';
import { PaymentScheduleService } from './payment-schedule/payment-schedule.service';
export declare class LoanResolver {
    private readonly LoanService;
    private readonly LoanTypeService;
    private readonly LoanPaymentService;
    private readonly LoanPaymentScheduleService;
    constructor(LoanService: LoanService, LoanTypeService: LoanTypeService, LoanPaymentService: LoanPaymentService, LoanPaymentScheduleService: PaymentScheduleService);
    loans(where: LoanWhereInput): Promise<import(".prisma/client").Loan[]>;
    loanTypes(where: LoantypeWhereInput): Promise<import(".prisma/client").Loantype[]>;
    loanPayments(where: LoanPaymentWhereInput): Promise<import(".prisma/client").LoanPayment[]>;
    createLoan(data: CustomCreateLoanInput): Promise<import(".prisma/client").Loan & {
        employee: import(".prisma/client").Employee & {
            user: import(".prisma/client").User;
        };
        paymentSchedule: import(".prisma/client").PaymentSchedule[];
    }>;
    createLoanPayment(data: LoanPaymentCreateInput): Promise<import(".prisma/client").LoanPayment>;
    payPayment(data: LoanPaymentUpdateInput): Promise<import(".prisma/client").Loan & {
        payments: (import(".prisma/client").LoanPayment & {
            employee: import(".prisma/client").Employee;
        })[];
        employee: import(".prisma/client").Employee & {
            user: import(".prisma/client").User;
        };
    }>;
    createLoanType(data: LoantypeCreateInput): Promise<import(".prisma/client").Loantype>;
    totalPaidAmount(root: Loan): Promise<0 | import("@prisma/client/runtime").Decimal>;
    paymentSchedule(root: Loan): Promise<import(".prisma/client").PaymentSchedule[]>;
    payments(root: Loan): Promise<import(".prisma/client").LoanPayment[]>;
    loanType(root: Loan): Promise<import(".prisma/client").Loantype>;
}
