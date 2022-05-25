import { ContractCreateWithoutBorrowerInput } from './contract-create-without-borrower.input';
import { ContractCreateOrConnectWithoutBorrowerInput } from './contract-create-or-connect-without-borrower.input';
import { ContractCreateManyBorrowerInputEnvelope } from './contract-create-many-borrower-input-envelope.input';
import { ContractWhereUniqueInput } from './contract-where-unique.input';
export declare class ContractUncheckedCreateNestedManyWithoutBorrowerInput {
    create?: Array<ContractCreateWithoutBorrowerInput>;
    connectOrCreate?: Array<ContractCreateOrConnectWithoutBorrowerInput>;
    createMany?: ContractCreateManyBorrowerInputEnvelope;
    connect?: Array<ContractWhereUniqueInput>;
}
