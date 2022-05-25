import { CommissionPaymentCreateWithoutPaymentScheduleInput } from './commission-payment-create-without-payment-schedule.input';
import { CommissionPaymentCreateOrConnectWithoutPaymentScheduleInput } from './commission-payment-create-or-connect-without-payment-schedule.input';
import { CommissionPaymentUpsertWithWhereUniqueWithoutPaymentScheduleInput } from './commission-payment-upsert-with-where-unique-without-payment-schedule.input';
import { CommissionPaymentCreateManyPaymentScheduleInputEnvelope } from './commission-payment-create-many-payment-schedule-input-envelope.input';
import { CommissionPaymentWhereUniqueInput } from './commission-payment-where-unique.input';
import { CommissionPaymentUpdateWithWhereUniqueWithoutPaymentScheduleInput } from './commission-payment-update-with-where-unique-without-payment-schedule.input';
import { CommissionPaymentUpdateManyWithWhereWithoutPaymentScheduleInput } from './commission-payment-update-many-with-where-without-payment-schedule.input';
import { CommissionPaymentScalarWhereInput } from './commission-payment-scalar-where.input';
export declare class CommissionPaymentUpdateManyWithoutPaymentScheduleInput {
    create?: Array<CommissionPaymentCreateWithoutPaymentScheduleInput>;
    connectOrCreate?: Array<CommissionPaymentCreateOrConnectWithoutPaymentScheduleInput>;
    upsert?: Array<CommissionPaymentUpsertWithWhereUniqueWithoutPaymentScheduleInput>;
    createMany?: CommissionPaymentCreateManyPaymentScheduleInputEnvelope;
    set?: Array<CommissionPaymentWhereUniqueInput>;
    disconnect?: Array<CommissionPaymentWhereUniqueInput>;
    delete?: Array<CommissionPaymentWhereUniqueInput>;
    connect?: Array<CommissionPaymentWhereUniqueInput>;
    update?: Array<CommissionPaymentUpdateWithWhereUniqueWithoutPaymentScheduleInput>;
    updateMany?: Array<CommissionPaymentUpdateManyWithWhereWithoutPaymentScheduleInput>;
    deleteMany?: Array<CommissionPaymentScalarWhereInput>;
}
