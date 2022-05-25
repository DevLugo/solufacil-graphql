import { DocumentCreateWithoutBorrowerInput } from './document-create-without-borrower.input';
import { DocumentCreateOrConnectWithoutBorrowerInput } from './document-create-or-connect-without-borrower.input';
import { DocumentUpsertWithWhereUniqueWithoutBorrowerInput } from './document-upsert-with-where-unique-without-borrower.input';
import { DocumentCreateManyBorrowerInputEnvelope } from './document-create-many-borrower-input-envelope.input';
import { DocumentWhereUniqueInput } from './document-where-unique.input';
import { DocumentUpdateWithWhereUniqueWithoutBorrowerInput } from './document-update-with-where-unique-without-borrower.input';
import { DocumentUpdateManyWithWhereWithoutBorrowerInput } from './document-update-many-with-where-without-borrower.input';
import { DocumentScalarWhereInput } from './document-scalar-where.input';
export declare class DocumentUncheckedUpdateManyWithoutBorrowerInput {
    create?: Array<DocumentCreateWithoutBorrowerInput>;
    connectOrCreate?: Array<DocumentCreateOrConnectWithoutBorrowerInput>;
    upsert?: Array<DocumentUpsertWithWhereUniqueWithoutBorrowerInput>;
    createMany?: DocumentCreateManyBorrowerInputEnvelope;
    set?: Array<DocumentWhereUniqueInput>;
    disconnect?: Array<DocumentWhereUniqueInput>;
    delete?: Array<DocumentWhereUniqueInput>;
    connect?: Array<DocumentWhereUniqueInput>;
    update?: Array<DocumentUpdateWithWhereUniqueWithoutBorrowerInput>;
    updateMany?: Array<DocumentUpdateManyWithWhereWithoutBorrowerInput>;
    deleteMany?: Array<DocumentScalarWhereInput>;
}
