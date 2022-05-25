import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumDocumentTypeFieldUpdateOperationsInput } from '../prisma/enum-document-type-field-update-operations.input';
export declare class DocumentUpdateManyMutationInput {
    id?: StringFieldUpdateOperationsInput;
    type?: EnumDocumentTypeFieldUpdateOperationsInput;
}
