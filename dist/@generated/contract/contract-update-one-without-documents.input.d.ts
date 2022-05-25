import { ContractCreateWithoutDocumentsInput } from './contract-create-without-documents.input';
import { ContractCreateOrConnectWithoutDocumentsInput } from './contract-create-or-connect-without-documents.input';
import { ContractUpsertWithoutDocumentsInput } from './contract-upsert-without-documents.input';
import { ContractWhereUniqueInput } from './contract-where-unique.input';
import { ContractUpdateWithoutDocumentsInput } from './contract-update-without-documents.input';
export declare class ContractUpdateOneWithoutDocumentsInput {
    create?: ContractCreateWithoutDocumentsInput;
    connectOrCreate?: ContractCreateOrConnectWithoutDocumentsInput;
    upsert?: ContractUpsertWithoutDocumentsInput;
    disconnect?: boolean;
    delete?: boolean;
    connect?: ContractWhereUniqueInput;
    update?: ContractUpdateWithoutDocumentsInput;
}
