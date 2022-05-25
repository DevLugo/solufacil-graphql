import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumEmployeesTypesFieldUpdateOperationsInput } from '../prisma/enum-employees-types-field-update-operations.input';
import { EnumCommissionGoalTypeFieldUpdateOperationsInput } from '../prisma/enum-commission-goal-type-field-update-operations.input';
import { EnumCommissionTypeFieldUpdateOperationsInput } from '../prisma/enum-commission-type-field-update-operations.input';
export declare class ComissionPaymentConfigurationUncheckedUpdateManyWithoutComissionPaymentConfigurationInput {
    id?: StringFieldUpdateOperationsInput;
    employeeType?: EnumEmployeesTypesFieldUpdateOperationsInput;
    commissionGoalType?: EnumCommissionGoalTypeFieldUpdateOperationsInput;
    commissionType?: EnumCommissionTypeFieldUpdateOperationsInput;
}
