import { LoanCreateWithoutLoanTypeInput } from './loan-create-without-loan-type.input';
import { LoanCreateOrConnectWithoutLoanTypeInput } from './loan-create-or-connect-without-loan-type.input';
import { LoanCreateManyLoanTypeInputEnvelope } from './loan-create-many-loan-type-input-envelope.input';
import { LoanWhereUniqueInput } from './loan-where-unique.input';
export declare class LoanCreateNestedManyWithoutLoanTypeInput {
    create?: Array<LoanCreateWithoutLoanTypeInput>;
    connectOrCreate?: Array<LoanCreateOrConnectWithoutLoanTypeInput>;
    createMany?: LoanCreateManyLoanTypeInputEnvelope;
    connect?: Array<LoanWhereUniqueInput>;
}
