import { LoanState } from '../prisma/loan-state.enum';
import { LoanPaymentUncheckedCreateNestedManyWithoutLoanInput } from '../loan-payment/loan-payment-unchecked-create-nested-many-without-loan.input';
import { Decimal } from '@prisma/client/runtime';
import { PaymentScheduleUncheckedCreateNestedManyWithoutLoanInput } from '../payment-schedule/payment-schedule-unchecked-create-nested-many-without-loan.input';
import { CommissionPaymentUncheckedCreateNestedManyWithoutLoanInput } from '../commission-payment/commission-payment-unchecked-create-nested-many-without-loan.input';
export declare class LoanUncheckedCreateWithoutContractInput {
    id?: string;
    status: keyof typeof LoanState;
    payments?: LoanPaymentUncheckedCreateNestedManyWithoutLoanInput;
    weeklyPaymentAmount: Decimal;
    amountToPay?: Decimal;
    signDate?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    loantypeId: string;
    employeeId: string;
    paymentSchedule?: PaymentScheduleUncheckedCreateNestedManyWithoutLoanInput;
    CommissionPayment?: CommissionPaymentUncheckedCreateNestedManyWithoutLoanInput;
}
