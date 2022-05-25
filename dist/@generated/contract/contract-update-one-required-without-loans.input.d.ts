import { ContractCreateWithoutLoansInput } from './contract-create-without-loans.input';
import { ContractCreateOrConnectWithoutLoansInput } from './contract-create-or-connect-without-loans.input';
import { ContractUpsertWithoutLoansInput } from './contract-upsert-without-loans.input';
import { ContractWhereUniqueInput } from './contract-where-unique.input';
import { ContractUpdateWithoutLoansInput } from './contract-update-without-loans.input';
export declare class ContractUpdateOneRequiredWithoutLoansInput {
    create?: ContractCreateWithoutLoansInput;
    connectOrCreate?: ContractCreateOrConnectWithoutLoansInput;
    upsert?: ContractUpsertWithoutLoansInput;
    connect?: ContractWhereUniqueInput;
    update?: ContractUpdateWithoutLoansInput;
}
