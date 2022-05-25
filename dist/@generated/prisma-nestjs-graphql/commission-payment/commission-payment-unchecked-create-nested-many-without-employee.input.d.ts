import { CommissionPaymentCreateWithoutEmployeeInput } from './commission-payment-create-without-employee.input';
import { CommissionPaymentCreateOrConnectWithoutEmployeeInput } from './commission-payment-create-or-connect-without-employee.input';
import { CommissionPaymentCreateManyEmployeeInputEnvelope } from './commission-payment-create-many-employee-input-envelope.input';
import { CommissionPaymentWhereUniqueInput } from './commission-payment-where-unique.input';
export declare class CommissionPaymentUncheckedCreateNestedManyWithoutEmployeeInput {
    create?: Array<CommissionPaymentCreateWithoutEmployeeInput>;
    connectOrCreate?: Array<CommissionPaymentCreateOrConnectWithoutEmployeeInput>;
    createMany?: CommissionPaymentCreateManyEmployeeInputEnvelope;
    connect?: Array<CommissionPaymentWhereUniqueInput>;
}
