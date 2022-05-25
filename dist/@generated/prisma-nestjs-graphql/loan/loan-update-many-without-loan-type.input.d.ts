import { LoanCreateWithoutLoanTypeInput } from './loan-create-without-loan-type.input';
import { LoanCreateOrConnectWithoutLoanTypeInput } from './loan-create-or-connect-without-loan-type.input';
import { LoanUpsertWithWhereUniqueWithoutLoanTypeInput } from './loan-upsert-with-where-unique-without-loan-type.input';
import { LoanCreateManyLoanTypeInputEnvelope } from './loan-create-many-loan-type-input-envelope.input';
import { LoanWhereUniqueInput } from './loan-where-unique.input';
import { LoanUpdateWithWhereUniqueWithoutLoanTypeInput } from './loan-update-with-where-unique-without-loan-type.input';
import { LoanUpdateManyWithWhereWithoutLoanTypeInput } from './loan-update-many-with-where-without-loan-type.input';
import { LoanScalarWhereInput } from './loan-scalar-where.input';
export declare class LoanUpdateManyWithoutLoanTypeInput {
    create?: Array<LoanCreateWithoutLoanTypeInput>;
    connectOrCreate?: Array<LoanCreateOrConnectWithoutLoanTypeInput>;
    upsert?: Array<LoanUpsertWithWhereUniqueWithoutLoanTypeInput>;
    createMany?: LoanCreateManyLoanTypeInputEnvelope;
    set?: Array<LoanWhereUniqueInput>;
    disconnect?: Array<LoanWhereUniqueInput>;
    delete?: Array<LoanWhereUniqueInput>;
    connect?: Array<LoanWhereUniqueInput>;
    update?: Array<LoanUpdateWithWhereUniqueWithoutLoanTypeInput>;
    updateMany?: Array<LoanUpdateManyWithWhereWithoutLoanTypeInput>;
    deleteMany?: Array<LoanScalarWhereInput>;
}
