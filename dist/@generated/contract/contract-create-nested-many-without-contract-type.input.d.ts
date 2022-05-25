import { ContractCreateWithoutContractTypeInput } from './contract-create-without-contract-type.input';
import { ContractCreateOrConnectWithoutContractTypeInput } from './contract-create-or-connect-without-contract-type.input';
import { ContractCreateManyContractTypeInputEnvelope } from './contract-create-many-contract-type-input-envelope.input';
import { ContractWhereUniqueInput } from './contract-where-unique.input';
export declare class ContractCreateNestedManyWithoutContractTypeInput {
    create?: Array<ContractCreateWithoutContractTypeInput>;
    connectOrCreate?: Array<ContractCreateOrConnectWithoutContractTypeInput>;
    createMany?: ContractCreateManyContractTypeInputEnvelope;
    connect?: Array<ContractWhereUniqueInput>;
}
