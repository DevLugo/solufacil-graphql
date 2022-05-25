import { DocumentCreateWithoutBorrowerInput } from './document-create-without-borrower.input';
import { DocumentCreateOrConnectWithoutBorrowerInput } from './document-create-or-connect-without-borrower.input';
import { DocumentCreateManyBorrowerInputEnvelope } from './document-create-many-borrower-input-envelope.input';
import { DocumentWhereUniqueInput } from './document-where-unique.input';
export declare class DocumentUncheckedCreateNestedManyWithoutBorrowerInput {
    create?: Array<DocumentCreateWithoutBorrowerInput>;
    connectOrCreate?: Array<DocumentCreateOrConnectWithoutBorrowerInput>;
    createMany?: DocumentCreateManyBorrowerInputEnvelope;
    connect?: Array<DocumentWhereUniqueInput>;
}
