import { CommissionPaymentCreateWithoutEmployeeInput } from './commission-payment-create-without-employee.input';
import { CommissionPaymentCreateOrConnectWithoutEmployeeInput } from './commission-payment-create-or-connect-without-employee.input';
import { CommissionPaymentUpsertWithWhereUniqueWithoutEmployeeInput } from './commission-payment-upsert-with-where-unique-without-employee.input';
import { CommissionPaymentCreateManyEmployeeInputEnvelope } from './commission-payment-create-many-employee-input-envelope.input';
import { CommissionPaymentWhereUniqueInput } from './commission-payment-where-unique.input';
import { CommissionPaymentUpdateWithWhereUniqueWithoutEmployeeInput } from './commission-payment-update-with-where-unique-without-employee.input';
import { CommissionPaymentUpdateManyWithWhereWithoutEmployeeInput } from './commission-payment-update-many-with-where-without-employee.input';
import { CommissionPaymentScalarWhereInput } from './commission-payment-scalar-where.input';
export declare class CommissionPaymentUpdateManyWithoutEmployeeInput {
    create?: Array<CommissionPaymentCreateWithoutEmployeeInput>;
    connectOrCreate?: Array<CommissionPaymentCreateOrConnectWithoutEmployeeInput>;
    upsert?: Array<CommissionPaymentUpsertWithWhereUniqueWithoutEmployeeInput>;
    createMany?: CommissionPaymentCreateManyEmployeeInputEnvelope;
    set?: Array<CommissionPaymentWhereUniqueInput>;
    disconnect?: Array<CommissionPaymentWhereUniqueInput>;
    delete?: Array<CommissionPaymentWhereUniqueInput>;
    connect?: Array<CommissionPaymentWhereUniqueInput>;
    update?: Array<CommissionPaymentUpdateWithWhereUniqueWithoutEmployeeInput>;
    updateMany?: Array<CommissionPaymentUpdateManyWithWhereWithoutEmployeeInput>;
    deleteMany?: Array<CommissionPaymentScalarWhereInput>;
}
