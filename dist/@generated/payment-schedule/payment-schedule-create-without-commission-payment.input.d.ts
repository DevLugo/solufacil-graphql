import { Decimal } from '@prisma/client/runtime';
import { PaymentState } from '../prisma/payment-state.enum';
import { LoanCreateNestedOneWithoutPaymentScheduleInput } from '../loan/loan-create-nested-one-without-payment-schedule.input';
import { LoanPaymentCreateNestedManyWithoutPaymentSchedulesInput } from '../loan-payment/loan-payment-create-nested-many-without-payment-schedules.input';
export declare class PaymentScheduleCreateWithoutCommissionPaymentInput {
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
    loan: LoanCreateNestedOneWithoutPaymentScheduleInput;
    loanPayments?: LoanPaymentCreateNestedManyWithoutPaymentSchedulesInput;
}
