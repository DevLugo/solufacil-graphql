import { DocumentCreateWithoutAvalInput } from './document-create-without-aval.input';
import { DocumentCreateOrConnectWithoutAvalInput } from './document-create-or-connect-without-aval.input';
import { DocumentCreateManyAvalInputEnvelope } from './document-create-many-aval-input-envelope.input';
import { DocumentWhereUniqueInput } from './document-where-unique.input';
export declare class DocumentCreateNestedManyWithoutAvalInput {
    create?: Array<DocumentCreateWithoutAvalInput>;
    connectOrCreate?: Array<DocumentCreateOrConnectWithoutAvalInput>;
    createMany?: DocumentCreateManyAvalInputEnvelope;
    connect?: Array<DocumentWhereUniqueInput>;
}
