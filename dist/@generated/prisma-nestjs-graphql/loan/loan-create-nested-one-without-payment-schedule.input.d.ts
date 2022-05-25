import { LoanCreateWithoutPaymentScheduleInput } from './loan-create-without-payment-schedule.input';
import { LoanCreateOrConnectWithoutPaymentScheduleInput } from './loan-create-or-connect-without-payment-schedule.input';
import { LoanWhereUniqueInput } from './loan-where-unique.input';
export declare class LoanCreateNestedOneWithoutPaymentScheduleInput {
    create?: LoanCreateWithoutPaymentScheduleInput;
    connectOrCreate?: LoanCreateOrConnectWithoutPaymentScheduleInput;
    connect?: LoanWhereUniqueInput;
}
