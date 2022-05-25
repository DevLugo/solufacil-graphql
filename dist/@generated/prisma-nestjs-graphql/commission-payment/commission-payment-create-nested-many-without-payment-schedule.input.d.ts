import { CommissionPaymentCreateWithoutPaymentScheduleInput } from './commission-payment-create-without-payment-schedule.input';
import { CommissionPaymentCreateOrConnectWithoutPaymentScheduleInput } from './commission-payment-create-or-connect-without-payment-schedule.input';
import { CommissionPaymentCreateManyPaymentScheduleInputEnvelope } from './commission-payment-create-many-payment-schedule-input-envelope.input';
import { CommissionPaymentWhereUniqueInput } from './commission-payment-where-unique.input';
export declare class CommissionPaymentCreateNestedManyWithoutPaymentScheduleInput {
    create?: Array<CommissionPaymentCreateWithoutPaymentScheduleInput>;
    connectOrCreate?: Array<CommissionPaymentCreateOrConnectWithoutPaymentScheduleInput>;
    createMany?: CommissionPaymentCreateManyPaymentScheduleInputEnvelope;
    connect?: Array<CommissionPaymentWhereUniqueInput>;
}
