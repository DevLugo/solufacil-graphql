import { ContractCreateWithoutDocumentsInput } from './contract-create-without-documents.input';
import { ContractCreateOrConnectWithoutDocumentsInput } from './contract-create-or-connect-without-documents.input';
import { ContractWhereUniqueInput } from './contract-where-unique.input';
export declare class ContractCreateNestedOneWithoutDocumentsInput {
    create?: ContractCreateWithoutDocumentsInput;
    connectOrCreate?: ContractCreateOrConnectWithoutDocumentsInput;
    connect?: ContractWhereUniqueInput;
}
