import { ContractWhereUniqueInput } from './contract-where-unique.input';
import { ContractCreateInput } from './contract-create.input';
import { ContractUpdateInput } from './contract-update.input';
export declare class UpsertOneContractArgs {
    where: ContractWhereUniqueInput;
    create: ContractCreateInput;
    update: ContractUpdateInput;
}
