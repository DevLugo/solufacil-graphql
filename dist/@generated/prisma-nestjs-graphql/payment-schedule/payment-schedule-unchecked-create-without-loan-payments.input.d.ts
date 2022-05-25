import { Decimal } from '@prisma/client/runtime';
import { PaymentState } from '../prisma/payment-state.enum';
import { CommissionPaymentUncheckedCreateNestedManyWithoutPaymentScheduleInput } from '../commission-payment/commission-payment-unchecked-create-nested-many-without-payment-schedule.input';
export declare class PaymentScheduleUncheckedCreateWithoutLoanPaymentsInput {
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
    CommissionPayment?: CommissionPaymentUncheckedCreateNestedManyWithoutPaymentScheduleInput;
}
