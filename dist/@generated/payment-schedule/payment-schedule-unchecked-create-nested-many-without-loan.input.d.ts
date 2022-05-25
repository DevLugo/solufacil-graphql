import { PaymentScheduleCreateWithoutLoanInput } from './payment-schedule-create-without-loan.input';
import { PaymentScheduleCreateOrConnectWithoutLoanInput } from './payment-schedule-create-or-connect-without-loan.input';
import { PaymentScheduleCreateManyLoanInputEnvelope } from './payment-schedule-create-many-loan-input-envelope.input';
import { PaymentScheduleWhereUniqueInput } from './payment-schedule-where-unique.input';
export declare class PaymentScheduleUncheckedCreateNestedManyWithoutLoanInput {
    create?: Array<PaymentScheduleCreateWithoutLoanInput>;
    connectOrCreate?: Array<PaymentScheduleCreateOrConnectWithoutLoanInput>;
    createMany?: PaymentScheduleCreateManyLoanInputEnvelope;
    connect?: Array<PaymentScheduleWhereUniqueInput>;
}
