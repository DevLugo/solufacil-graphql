import { ContractTypeCreateWithoutContractInput } from './contract-type-create-without-contract.input';
import { ContractTypeCreateOrConnectWithoutContractInput } from './contract-type-create-or-connect-without-contract.input';
import { ContractTypeWhereUniqueInput } from './contract-type-where-unique.input';
export declare class ContractTypeCreateNestedOneWithoutContractInput {
    create?: ContractTypeCreateWithoutContractInput;
    connectOrCreate?: ContractTypeCreateOrConnectWithoutContractInput;
    connect?: ContractTypeWhereUniqueInput;
}
