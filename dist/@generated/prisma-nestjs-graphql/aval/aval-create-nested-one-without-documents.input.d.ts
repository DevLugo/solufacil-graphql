import { AvalCreateWithoutDocumentsInput } from './aval-create-without-documents.input';
import { AvalCreateOrConnectWithoutDocumentsInput } from './aval-create-or-connect-without-documents.input';
import { AvalWhereUniqueInput } from './aval-where-unique.input';
export declare class AvalCreateNestedOneWithoutDocumentsInput {
    create?: AvalCreateWithoutDocumentsInput;
    connectOrCreate?: AvalCreateOrConnectWithoutDocumentsInput;
    connect?: AvalWhereUniqueInput;
}
