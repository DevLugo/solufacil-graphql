import { ContractCreateWithoutLoansInput } from './contract-create-without-loans.input';
import { ContractCreateOrConnectWithoutLoansInput } from './contract-create-or-connect-without-loans.input';
import { ContractWhereUniqueInput } from './contract-where-unique.input';
export declare class ContractCreateNestedOneWithoutLoansInput {
    create?: ContractCreateWithoutLoansInput;
    connectOrCreate?: ContractCreateOrConnectWithoutLoansInput;
    connect?: ContractWhereUniqueInput;
}
