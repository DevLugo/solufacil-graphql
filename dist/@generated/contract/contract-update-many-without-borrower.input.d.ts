import { ContractCreateWithoutBorrowerInput } from './contract-create-without-borrower.input';
import { ContractCreateOrConnectWithoutBorrowerInput } from './contract-create-or-connect-without-borrower.input';
import { ContractUpsertWithWhereUniqueWithoutBorrowerInput } from './contract-upsert-with-where-unique-without-borrower.input';
import { ContractCreateManyBorrowerInputEnvelope } from './contract-create-many-borrower-input-envelope.input';
import { ContractWhereUniqueInput } from './contract-where-unique.input';
import { ContractUpdateWithWhereUniqueWithoutBorrowerInput } from './contract-update-with-where-unique-without-borrower.input';
import { ContractUpdateManyWithWhereWithoutBorrowerInput } from './contract-update-many-with-where-without-borrower.input';
import { ContractScalarWhereInput } from './contract-scalar-where.input';
export declare class ContractUpdateManyWithoutBorrowerInput {
    create?: Array<ContractCreateWithoutBorrowerInput>;
    connectOrCreate?: Array<ContractCreateOrConnectWithoutBorrowerInput>;
    upsert?: Array<ContractUpsertWithWhereUniqueWithoutBorrowerInput>;
    createMany?: ContractCreateManyBorrowerInputEnvelope;
    set?: Array<ContractWhereUniqueInput>;
    disconnect?: Array<ContractWhereUniqueInput>;
    delete?: Array<ContractWhereUniqueInput>;
    connect?: Array<ContractWhereUniqueInput>;
    update?: Array<ContractUpdateWithWhereUniqueWithoutBorrowerInput>;
    updateMany?: Array<ContractUpdateManyWithWhereWithoutBorrowerInput>;
    deleteMany?: Array<ContractScalarWhereInput>;
}
