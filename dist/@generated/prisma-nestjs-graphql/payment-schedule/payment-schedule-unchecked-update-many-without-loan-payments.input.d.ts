import { PaymentScheduleCreateWithoutLoanPaymentsInput } from './payment-schedule-create-without-loan-payments.input';
import { PaymentScheduleCreateOrConnectWithoutLoanPaymentsInput } from './payment-schedule-create-or-connect-without-loan-payments.input';
import { PaymentScheduleUpsertWithWhereUniqueWithoutLoanPaymentsInput } from './payment-schedule-upsert-with-where-unique-without-loan-payments.input';
import { PaymentScheduleWhereUniqueInput } from './payment-schedule-where-unique.input';
import { PaymentScheduleUpdateWithWhereUniqueWithoutLoanPaymentsInput } from './payment-schedule-update-with-where-unique-without-loan-payments.input';
import { PaymentScheduleUpdateManyWithWhereWithoutLoanPaymentsInput } from './payment-schedule-update-many-with-where-without-loan-payments.input';
import { PaymentScheduleScalarWhereInput } from './payment-schedule-scalar-where.input';
export declare class PaymentScheduleUncheckedUpdateManyWithoutLoanPaymentsInput {
    create?: Array<PaymentScheduleCreateWithoutLoanPaymentsInput>;
    connectOrCreate?: Array<PaymentScheduleCreateOrConnectWithoutLoanPaymentsInput>;
    upsert?: Array<PaymentScheduleUpsertWithWhereUniqueWithoutLoanPaymentsInput>;
    set?: Array<PaymentScheduleWhereUniqueInput>;
    disconnect?: Array<PaymentScheduleWhereUniqueInput>;
    delete?: Array<PaymentScheduleWhereUniqueInput>;
    connect?: Array<PaymentScheduleWhereUniqueInput>;
    update?: Array<PaymentScheduleUpdateWithWhereUniqueWithoutLoanPaymentsInput>;
    updateMany?: Array<PaymentScheduleUpdateManyWithWhereWithoutLoanPaymentsInput>;
    deleteMany?: Array<PaymentScheduleScalarWhereInput>;
}
