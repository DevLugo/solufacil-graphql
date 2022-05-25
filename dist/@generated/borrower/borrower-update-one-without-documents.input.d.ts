import { BorrowerCreateWithoutDocumentsInput } from './borrower-create-without-documents.input';
import { BorrowerCreateOrConnectWithoutDocumentsInput } from './borrower-create-or-connect-without-documents.input';
import { BorrowerUpsertWithoutDocumentsInput } from './borrower-upsert-without-documents.input';
import { BorrowerWhereUniqueInput } from './borrower-where-unique.input';
import { BorrowerUpdateWithoutDocumentsInput } from './borrower-update-without-documents.input';
export declare class BorrowerUpdateOneWithoutDocumentsInput {
    create?: BorrowerCreateWithoutDocumentsInput;
    connectOrCreate?: BorrowerCreateOrConnectWithoutDocumentsInput;
    upsert?: BorrowerUpsertWithoutDocumentsInput;
    disconnect?: boolean;
    delete?: boolean;
    connect?: BorrowerWhereUniqueInput;
    update?: BorrowerUpdateWithoutDocumentsInput;
}
