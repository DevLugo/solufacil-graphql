import { DocumentCreateWithoutAvalInput } from './document-create-without-aval.input';
import { DocumentCreateOrConnectWithoutAvalInput } from './document-create-or-connect-without-aval.input';
import { DocumentUpsertWithWhereUniqueWithoutAvalInput } from './document-upsert-with-where-unique-without-aval.input';
import { DocumentCreateManyAvalInputEnvelope } from './document-create-many-aval-input-envelope.input';
import { DocumentWhereUniqueInput } from './document-where-unique.input';
import { DocumentUpdateWithWhereUniqueWithoutAvalInput } from './document-update-with-where-unique-without-aval.input';
import { DocumentUpdateManyWithWhereWithoutAvalInput } from './document-update-many-with-where-without-aval.input';
import { DocumentScalarWhereInput } from './document-scalar-where.input';
export declare class DocumentUncheckedUpdateManyWithoutAvalInput {
    create?: Array<DocumentCreateWithoutAvalInput>;
    connectOrCreate?: Array<DocumentCreateOrConnectWithoutAvalInput>;
    upsert?: Array<DocumentUpsertWithWhereUniqueWithoutAvalInput>;
    createMany?: DocumentCreateManyAvalInputEnvelope;
    set?: Array<DocumentWhereUniqueInput>;
    disconnect?: Array<DocumentWhereUniqueInput>;
    delete?: Array<DocumentWhereUniqueInput>;
    connect?: Array<DocumentWhereUniqueInput>;
    update?: Array<DocumentUpdateWithWhereUniqueWithoutAvalInput>;
    updateMany?: Array<DocumentUpdateManyWithWhereWithoutAvalInput>;
    deleteMany?: Array<DocumentScalarWhereInput>;
}
