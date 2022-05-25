import { Decimal } from '@prisma/client/runtime';
import { PaymentState } from '../prisma/payment-state.enum';
import { LoanPaymentUncheckedCreateNestedManyWithoutPaymentSchedulesInput } from '../loan-payment/loan-payment-unchecked-create-nested-many-without-payment-schedules.input';
import { CommissionPaymentUncheckedCreateNestedManyWithoutPaymentScheduleInput } from '../commission-payment/commission-payment-unchecked-create-nested-many-without-payment-schedule.input';
export declare class PaymentScheduleUncheckedCreateInput {
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
    loanId: string;
    loanPayments?: LoanPaymentUncheckedCreateNestedManyWithoutPaymentSchedulesInput;
    CommissionPayment?: CommissionPaymentUncheckedCreateNestedManyWithoutPaymentScheduleInput;
}
