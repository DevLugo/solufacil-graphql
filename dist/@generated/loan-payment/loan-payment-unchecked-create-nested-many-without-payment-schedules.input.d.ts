import { LoanPaymentCreateWithoutPaymentSchedulesInput } from './loan-payment-create-without-payment-schedules.input';
import { LoanPaymentCreateOrConnectWithoutPaymentSchedulesInput } from './loan-payment-create-or-connect-without-payment-schedules.input';
import { LoanPaymentWhereUniqueInput } from './loan-payment-where-unique.input';
export declare class LoanPaymentUncheckedCreateNestedManyWithoutPaymentSchedulesInput {
    create?: Array<LoanPaymentCreateWithoutPaymentSchedulesInput>;
    connectOrCreate?: Array<LoanPaymentCreateOrConnectWithoutPaymentSchedulesInput>;
    connect?: Array<LoanPaymentWhereUniqueInput>;
}
