import { DocumentCreateWithoutContractInput } from './document-create-without-contract.input';
import { DocumentCreateOrConnectWithoutContractInput } from './document-create-or-connect-without-contract.input';
import { DocumentCreateManyContractInputEnvelope } from './document-create-many-contract-input-envelope.input';
import { DocumentWhereUniqueInput } from './document-where-unique.input';
export declare class DocumentCreateNestedManyWithoutContractInput {
    create?: Array<DocumentCreateWithoutContractInput>;
    connectOrCreate?: Array<DocumentCreateOrConnectWithoutContractInput>;
    createMany?: DocumentCreateManyContractInputEnvelope;
    connect?: Array<DocumentWhereUniqueInput>;
}
