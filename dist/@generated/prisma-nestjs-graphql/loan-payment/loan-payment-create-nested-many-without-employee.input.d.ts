import { LoanPaymentCreateWithoutEmployeeInput } from './loan-payment-create-without-employee.input';
import { LoanPaymentCreateOrConnectWithoutEmployeeInput } from './loan-payment-create-or-connect-without-employee.input';
import { LoanPaymentCreateManyEmployeeInputEnvelope } from './loan-payment-create-many-employee-input-envelope.input';
import { LoanPaymentWhereUniqueInput } from './loan-payment-where-unique.input';
export declare class LoanPaymentCreateNestedManyWithoutEmployeeInput {
    create?: Array<LoanPaymentCreateWithoutEmployeeInput>;
    connectOrCreate?: Array<LoanPaymentCreateOrConnectWithoutEmployeeInput>;
    createMany?: LoanPaymentCreateManyEmployeeInputEnvelope;
    connect?: Array<LoanPaymentWhereUniqueInput>;
}
