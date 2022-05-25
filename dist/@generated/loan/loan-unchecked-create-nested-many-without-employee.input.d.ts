import { LoanCreateWithoutEmployeeInput } from './loan-create-without-employee.input';
import { LoanCreateOrConnectWithoutEmployeeInput } from './loan-create-or-connect-without-employee.input';
import { LoanCreateManyEmployeeInputEnvelope } from './loan-create-many-employee-input-envelope.input';
import { LoanWhereUniqueInput } from './loan-where-unique.input';
export declare class LoanUncheckedCreateNestedManyWithoutEmployeeInput {
    create?: Array<LoanCreateWithoutEmployeeInput>;
    connectOrCreate?: Array<LoanCreateOrConnectWithoutEmployeeInput>;
    createMany?: LoanCreateManyEmployeeInputEnvelope;
    connect?: Array<LoanWhereUniqueInput>;
}
