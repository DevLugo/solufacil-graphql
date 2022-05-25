import { AvalCreateWithoutDocumentsInput } from './aval-create-without-documents.input';
import { AvalCreateOrConnectWithoutDocumentsInput } from './aval-create-or-connect-without-documents.input';
import { AvalUpsertWithoutDocumentsInput } from './aval-upsert-without-documents.input';
import { AvalWhereUniqueInput } from './aval-where-unique.input';
import { AvalUpdateWithoutDocumentsInput } from './aval-update-without-documents.input';
export declare class AvalUpdateOneWithoutDocumentsInput {
    create?: AvalCreateWithoutDocumentsInput;
    connectOrCreate?: AvalCreateOrConnectWithoutDocumentsInput;
    upsert?: AvalUpsertWithoutDocumentsInput;
    disconnect?: boolean;
    delete?: boolean;
    connect?: AvalWhereUniqueInput;
    update?: AvalUpdateWithoutDocumentsInput;
}
