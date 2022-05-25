import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { ContractUpdateManyWithoutContractTypeInput } from '../contract/contract-update-many-without-contract-type.input';
export declare class ContractTypeUpdateInput {
    id?: StringFieldUpdateOperationsInput;
    name?: StringFieldUpdateOperationsInput;
    monthDuration?: IntFieldUpdateOperationsInput;
    amount?: DecimalFieldUpdateOperationsInput;
    maxRate?: DecimalFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;
    contract?: ContractUpdateManyWithoutContractTypeInput;
}
