import { LoanPaymentCreateWithoutEmployeeInput } from './loan-payment-create-without-employee.input';
import { LoanPaymentCreateOrConnectWithoutEmployeeInput } from './loan-payment-create-or-connect-without-employee.input';
import { LoanPaymentUpsertWithWhereUniqueWithoutEmployeeInput } from './loan-payment-upsert-with-where-unique-without-employee.input';
import { LoanPaymentCreateManyEmployeeInputEnvelope } from './loan-payment-create-many-employee-input-envelope.input';
import { LoanPaymentWhereUniqueInput } from './loan-payment-where-unique.input';
import { LoanPaymentUpdateWithWhereUniqueWithoutEmployeeInput } from './loan-payment-update-with-where-unique-without-employee.input';
import { LoanPaymentUpdateManyWithWhereWithoutEmployeeInput } from './loan-payment-update-many-with-where-without-employee.input';
import { LoanPaymentScalarWhereInput } from './loan-payment-scalar-where.input';
export declare class LoanPaymentUpdateManyWithoutEmployeeInput {
    create?: Array<LoanPaymentCreateWithoutEmployeeInput>;
    connectOrCreate?: Array<LoanPaymentCreateOrConnectWithoutEmployeeInput>;
    upsert?: Array<LoanPaymentUpsertWithWhereUniqueWithoutEmployeeInput>;
    createMany?: LoanPaymentCreateManyEmployeeInputEnvelope;
    set?: Array<LoanPaymentWhereUniqueInput>;
    disconnect?: Array<LoanPaymentWhereUniqueInput>;
    delete?: Array<LoanPaymentWhereUniqueInput>;
    connect?: Array<LoanPaymentWhereUniqueInput>;
    update?: Array<LoanPaymentUpdateWithWhereUniqueWithoutEmployeeInput>;
    updateMany?: Array<LoanPaymentUpdateManyWithWhereWithoutEmployeeInput>;
    deleteMany?: Array<LoanPaymentScalarWhereInput>;
}
