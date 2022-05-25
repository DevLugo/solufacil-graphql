import { DocumentWhereUniqueInput } from './document-where-unique.input';
import { DocumentCreateInput } from './document-create.input';
import { DocumentUpdateInput } from './document-update.input';
export declare class UpsertOneDocumentArgs {
    where: DocumentWhereUniqueInput;
    create: DocumentCreateInput;
    update: DocumentUpdateInput;
}
