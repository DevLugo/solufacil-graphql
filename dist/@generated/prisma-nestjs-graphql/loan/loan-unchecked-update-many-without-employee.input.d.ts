import { LoanCreateWithoutEmployeeInput } from './loan-create-without-employee.input';
import { LoanCreateOrConnectWithoutEmployeeInput } from './loan-create-or-connect-without-employee.input';
import { LoanUpsertWithWhereUniqueWithoutEmployeeInput } from './loan-upsert-with-where-unique-without-employee.input';
import { LoanCreateManyEmployeeInputEnvelope } from './loan-create-many-employee-input-envelope.input';
import { LoanWhereUniqueInput } from './loan-where-unique.input';
import { LoanUpdateWithWhereUniqueWithoutEmployeeInput } from './loan-update-with-where-unique-without-employee.input';
import { LoanUpdateManyWithWhereWithoutEmployeeInput } from './loan-update-many-with-where-without-employee.input';
import { LoanScalarWhereInput } from './loan-scalar-where.input';
export declare class LoanUncheckedUpdateManyWithoutEmployeeInput {
    create?: Array<LoanCreateWithoutEmployeeInput>;
    connectOrCreate?: Array<LoanCreateOrConnectWithoutEmployeeInput>;
    upsert?: Array<LoanUpsertWithWhereUniqueWithoutEmployeeInput>;
    createMany?: LoanCreateManyEmployeeInputEnvelope;
    set?: Array<LoanWhereUniqueInput>;
    disconnect?: Array<LoanWhereUniqueInput>;
    delete?: Array<LoanWhereUniqueInput>;
    connect?: Array<LoanWhereUniqueInput>;
    update?: Array<LoanUpdateWithWhereUniqueWithoutEmployeeInput>;
    updateMany?: Array<LoanUpdateManyWithWhereWithoutEmployeeInput>;
    deleteMany?: Array<LoanScalarWhereInput>;
}
