import { LoanPaymentCreateWithoutPaymentSchedulesInput } from './loan-payment-create-without-payment-schedules.input';
import { LoanPaymentCreateOrConnectWithoutPaymentSchedulesInput } from './loan-payment-create-or-connect-without-payment-schedules.input';
import { LoanPaymentUpsertWithWhereUniqueWithoutPaymentSchedulesInput } from './loan-payment-upsert-with-where-unique-without-payment-schedules.input';
import { LoanPaymentWhereUniqueInput } from './loan-payment-where-unique.input';
import { LoanPaymentUpdateWithWhereUniqueWithoutPaymentSchedulesInput } from './loan-payment-update-with-where-unique-without-payment-schedules.input';
import { LoanPaymentUpdateManyWithWhereWithoutPaymentSchedulesInput } from './loan-payment-update-many-with-where-without-payment-schedules.input';
import { LoanPaymentScalarWhereInput } from './loan-payment-scalar-where.input';
export declare class LoanPaymentUncheckedUpdateManyWithoutPaymentSchedulesInput {
    create?: Array<LoanPaymentCreateWithoutPaymentSchedulesInput>;
    connectOrCreate?: Array<LoanPaymentCreateOrConnectWithoutPaymentSchedulesInput>;
    upsert?: Array<LoanPaymentUpsertWithWhereUniqueWithoutPaymentSchedulesInput>;
    set?: Array<LoanPaymentWhereUniqueInput>;
    disconnect?: Array<LoanPaymentWhereUniqueInput>;
    delete?: Array<LoanPaymentWhereUniqueInput>;
    connect?: Array<LoanPaymentWhereUniqueInput>;
    update?: Array<LoanPaymentUpdateWithWhereUniqueWithoutPaymentSchedulesInput>;
    updateMany?: Array<LoanPaymentUpdateManyWithWhereWithoutPaymentSchedulesInput>;
    deleteMany?: Array<LoanPaymentScalarWhereInput>;
}
