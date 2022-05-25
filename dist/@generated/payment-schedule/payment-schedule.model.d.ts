import { Decimal } from '@prisma/client/runtime';
import { PaymentState } from '../prisma/payment-state.enum';
import { Loan } from '../loan/loan.model';
import { LoanPayment } from '../loan-payment/loan-payment.model';
import { CommissionPayment } from '../commission-payment/commission-payment.model';
import { PaymentScheduleCount } from './payment-schedule-count.output';
export declare class PaymentSchedule {
    id: string;
    numeration: number;
    amountToPay: Decimal;
    paidAmount: Decimal;
    returnToCapital: Decimal;
    profit: Decimal;
    status: keyof typeof PaymentState;
    delayed: boolean;
    dueDate: Date;
    details: string | null;
    createdAt: Date;
    updatedAt: Date;
    loan?: Loan;
    loanId: string;
    loanPayments?: Array<LoanPayment>;
    CommissionPayment?: Array<CommissionPayment>;
    _count?: PaymentScheduleCount;
}
