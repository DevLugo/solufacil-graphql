import { Decimal } from '@prisma/client/runtime';
import { PaymentState } from '../prisma/payment-state.enum';
import { LoanPaymentCreateNestedManyWithoutPaymentSchedulesInput } from '../loan-payment/loan-payment-create-nested-many-without-payment-schedules.input';
import { CommissionPaymentCreateNestedManyWithoutPaymentScheduleInput } from '../commission-payment/commission-payment-create-nested-many-without-payment-schedule.input';
export declare class PaymentScheduleCreateWithoutLoanInput {
    id?: string;
    numeration: number;
    amountToPay: Decimal;
    paidAmount: Decimal;
    returnToCapital?: Decimal;
    profit?: Decimal;
    status: keyof typeof PaymentState;
    delayed?: boolean;
    dueDate: Date | string;
    details?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    loanPayments?: LoanPaymentCreateNestedManyWithoutPaymentSchedulesInput;
    CommissionPayment?: CommissionPaymentCreateNestedManyWithoutPaymentScheduleInput;
}
