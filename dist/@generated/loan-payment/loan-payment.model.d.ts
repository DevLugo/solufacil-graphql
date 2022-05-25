import { Decimal } from '@prisma/client/runtime';
import { PaymentSchedule } from '../payment-schedule/payment-schedule.model';
import { Loan } from '../loan/loan.model';
import { Employee } from '../employee/employee.model';
import { LoanPaymentCount } from '../loan/loan-payment-count.output';
export declare class LoanPayment {
    id: string;
    amount: Decimal;
    date: Date;
    comments: string | null;
    createdAt: Date;
    updatedAt: Date;
    paymentSchedules?: Array<PaymentSchedule>;
    loan?: Loan;
    loanId: string;
    employee?: Employee;
    employeeId: string;
    _count?: LoanPaymentCount;
}
