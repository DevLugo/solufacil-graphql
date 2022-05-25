import { BorrowerCreateWithoutDocumentsInput } from './borrower-create-without-documents.input';
import { BorrowerCreateOrConnectWithoutDocumentsInput } from './borrower-create-or-connect-without-documents.input';
import { BorrowerWhereUniqueInput } from './borrower-where-unique.input';
export declare class BorrowerCreateNestedOneWithoutDocumentsInput {
    create?: BorrowerCreateWithoutDocumentsInput;
    connectOrCreate?: BorrowerCreateOrConnectWithoutDocumentsInput;
    connect?: BorrowerWhereUniqueInput;
}
