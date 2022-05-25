import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumDocumentTypeFieldUpdateOperationsInput } from '../prisma/enum-document-type-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
export declare class DocumentUncheckedUpdateWithoutContractInput {
    id?: StringFieldUpdateOperationsInput;
    type?: EnumDocumentTypeFieldUpdateOperationsInput;
    borrowerId?: NullableStringFieldUpdateOperationsInput;
    avalId?: NullableStringFieldUpdateOperationsInput;
    employeeId?: NullableStringFieldUpdateOperationsInput;
}
