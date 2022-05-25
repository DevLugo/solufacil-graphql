import { PaymentScheduleCreateWithoutLoanPaymentsInput } from './payment-schedule-create-without-loan-payments.input';
import { PaymentScheduleCreateOrConnectWithoutLoanPaymentsInput } from './payment-schedule-create-or-connect-without-loan-payments.input';
import { PaymentScheduleWhereUniqueInput } from './payment-schedule-where-unique.input';
export declare class PaymentScheduleUncheckedCreateNestedManyWithoutLoanPaymentsInput {
    create?: Array<PaymentScheduleCreateWithoutLoanPaymentsInput>;
    connectOrCreate?: Array<PaymentScheduleCreateOrConnectWithoutLoanPaymentsInput>;
    connect?: Array<PaymentScheduleWhereUniqueInput>;
}
