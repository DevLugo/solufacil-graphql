import { Decimal } from '@prisma/client/runtime';
import { PaymentSchedule } from '../payment-schedule/payment-schedule.model';
import { Loan } from '../loan/loan.model';
import { Employee } from '../employee/employee.model';
import { CommissionPaymentStatus } from '../prisma/commission-payment-status.enum';
export declare class CommissionPayment {
    id: string;
    amount: Decimal;
    paymentSchedule?: PaymentSchedule;
    loan?: Loan | null;
    employee?: Employee;
    loanId: string | null;
    paymentScheduleId: string;
    employeeId: string;
    status: keyof typeof CommissionPaymentStatus;
}
