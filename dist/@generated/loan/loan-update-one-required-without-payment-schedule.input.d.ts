import { LoanCreateWithoutPaymentScheduleInput } from './loan-create-without-payment-schedule.input';
import { LoanCreateOrConnectWithoutPaymentScheduleInput } from './loan-create-or-connect-without-payment-schedule.input';
import { LoanUpsertWithoutPaymentScheduleInput } from './loan-upsert-without-payment-schedule.input';
import { LoanWhereUniqueInput } from './loan-where-unique.input';
import { LoanUpdateWithoutPaymentScheduleInput } from './loan-update-without-payment-schedule.input';
export declare class LoanUpdateOneRequiredWithoutPaymentScheduleInput {
    create?: LoanCreateWithoutPaymentScheduleInput;
    connectOrCreate?: LoanCreateOrConnectWithoutPaymentScheduleInput;
    upsert?: LoanUpsertWithoutPaymentScheduleInput;
    connect?: LoanWhereUniqueInput;
    update?: LoanUpdateWithoutPaymentScheduleInput;
}
