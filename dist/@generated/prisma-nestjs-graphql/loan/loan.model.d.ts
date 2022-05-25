import { LoanState } from '../prisma/loan-state.enum';
import { LoanPayment } from '../loan-payment/loan-payment.model';
import { Decimal } from '@prisma/client/runtime';
import { Loantype } from '../loantype/loantype.model';
import { Employee } from '../employee/employee.model';
import { Contract } from '../contract/contract.model';
import { PaymentSchedule } from '../payment-schedule/payment-schedule.model';
import { CommissionPayment } from '../commission-payment/commission-payment.model';
import { LoanCount } from './loan-count.output';
export declare class Loan {
    id: string;
    status: keyof typeof LoanState;
    payments?: Array<LoanPayment>;
    weeklyPaymentAmount: Decimal;
    amountToPay: Decimal;
    loanType?: Loantype;
    signDate: Date;
    createdAt: Date;
    employee?: Employee;
    updatedAt: Date;
    contract?: Contract;
    contractId: string;
    loantypeId: string;
    employeeId: string;
    paymentSchedule?: Array<PaymentSchedule>;
    CommissionPayment?: Array<CommissionPayment>;
    _count?: LoanCount;
}
