import { LoanCreateWithoutContractInput } from './loan-create-without-contract.input';
import { LoanCreateOrConnectWithoutContractInput } from './loan-create-or-connect-without-contract.input';
import { LoanCreateManyContractInputEnvelope } from './loan-create-many-contract-input-envelope.input';
import { LoanWhereUniqueInput } from './loan-where-unique.input';
export declare class LoanCreateNestedManyWithoutContractInput {
    create?: Array<LoanCreateWithoutContractInput>;
    connectOrCreate?: Array<LoanCreateOrConnectWithoutContractInput>;
    createMany?: LoanCreateManyContractInputEnvelope;
    connect?: Array<LoanWhereUniqueInput>;
}
