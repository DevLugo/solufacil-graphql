import { ContractTypeCreateWithoutContractInput } from './contract-type-create-without-contract.input';
import { ContractTypeCreateOrConnectWithoutContractInput } from './contract-type-create-or-connect-without-contract.input';
import { ContractTypeUpsertWithoutContractInput } from './contract-type-upsert-without-contract.input';
import { ContractTypeWhereUniqueInput } from './contract-type-where-unique.input';
import { ContractTypeUpdateWithoutContractInput } from './contract-type-update-without-contract.input';
export declare class ContractTypeUpdateOneRequiredWithoutContractInput {
    create?: ContractTypeCreateWithoutContractInput;
    connectOrCreate?: ContractTypeCreateOrConnectWithoutContractInput;
    upsert?: ContractTypeUpsertWithoutContractInput;
    connect?: ContractTypeWhereUniqueInput;
    update?: ContractTypeUpdateWithoutContractInput;
}
