import { PaymentScheduleCreateWithoutLoanInput } from './payment-schedule-create-without-loan.input';
import { PaymentScheduleCreateOrConnectWithoutLoanInput } from './payment-schedule-create-or-connect-without-loan.input';
import { PaymentScheduleUpsertWithWhereUniqueWithoutLoanInput } from './payment-schedule-upsert-with-where-unique-without-loan.input';
import { PaymentScheduleCreateManyLoanInputEnvelope } from './payment-schedule-create-many-loan-input-envelope.input';
import { PaymentScheduleWhereUniqueInput } from './payment-schedule-where-unique.input';
import { PaymentScheduleUpdateWithWhereUniqueWithoutLoanInput } from './payment-schedule-update-with-where-unique-without-loan.input';
import { PaymentScheduleUpdateManyWithWhereWithoutLoanInput } from './payment-schedule-update-many-with-where-without-loan.input';
import { PaymentScheduleScalarWhereInput } from './payment-schedule-scalar-where.input';
export declare class PaymentScheduleUpdateManyWithoutLoanInput {
    create?: Array<PaymentScheduleCreateWithoutLoanInput>;
    connectOrCreate?: Array<PaymentScheduleCreateOrConnectWithoutLoanInput>;
    upsert?: Array<PaymentScheduleUpsertWithWhereUniqueWithoutLoanInput>;
    createMany?: PaymentScheduleCreateManyLoanInputEnvelope;
    set?: Array<PaymentScheduleWhereUniqueInput>;
    disconnect?: Array<PaymentScheduleWhereUniqueInput>;
    delete?: Array<PaymentScheduleWhereUniqueInput>;
    connect?: Array<PaymentScheduleWhereUniqueInput>;
    update?: Array<PaymentScheduleUpdateWithWhereUniqueWithoutLoanInput>;
    updateMany?: Array<PaymentScheduleUpdateManyWithWhereWithoutLoanInput>;
    deleteMany?: Array<PaymentScheduleScalarWhereInput>;
}
