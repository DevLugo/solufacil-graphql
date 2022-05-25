import { LoanCreateWithoutContractInput } from './loan-create-without-contract.input';
import { LoanCreateOrConnectWithoutContractInput } from './loan-create-or-connect-without-contract.input';
import { LoanUpsertWithWhereUniqueWithoutContractInput } from './loan-upsert-with-where-unique-without-contract.input';
import { LoanCreateManyContractInputEnvelope } from './loan-create-many-contract-input-envelope.input';
import { LoanWhereUniqueInput } from './loan-where-unique.input';
import { LoanUpdateWithWhereUniqueWithoutContractInput } from './loan-update-with-where-unique-without-contract.input';
import { LoanUpdateManyWithWhereWithoutContractInput } from './loan-update-many-with-where-without-contract.input';
import { LoanScalarWhereInput } from './loan-scalar-where.input';
export declare class LoanUpdateManyWithoutContractInput {
    create?: Array<LoanCreateWithoutContractInput>;
    connectOrCreate?: Array<LoanCreateOrConnectWithoutContractInput>;
    upsert?: Array<LoanUpsertWithWhereUniqueWithoutContractInput>;
    createMany?: LoanCreateManyContractInputEnvelope;
    set?: Array<LoanWhereUniqueInput>;
    disconnect?: Array<LoanWhereUniqueInput>;
    delete?: Array<LoanWhereUniqueInput>;
    connect?: Array<LoanWhereUniqueInput>;
    update?: Array<LoanUpdateWithWhereUniqueWithoutContractInput>;
    updateMany?: Array<LoanUpdateManyWithWhereWithoutContractInput>;
    deleteMany?: Array<LoanScalarWhereInput>;
}
