import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumEmployeesTypesFieldUpdateOperationsInput } from '../prisma/enum-employees-types-field-update-operations.input';
import { LoantypeUpdateOneRequiredWithoutComissionPaymentConfigurationInput } from '../loantype/loantype-update-one-required-without-comission-payment-configuration.input';
import { EnumCommissionGoalTypeFieldUpdateOperationsInput } from '../prisma/enum-commission-goal-type-field-update-operations.input';
import { EnumCommissionTypeFieldUpdateOperationsInput } from '../prisma/enum-commission-type-field-update-operations.input';
export declare class ComissionPaymentConfigurationUpdateInput {
    id?: StringFieldUpdateOperationsInput;
    employeeType?: EnumEmployeesTypesFieldUpdateOperationsInput;
    loanType?: LoantypeUpdateOneRequiredWithoutComissionPaymentConfigurationInput;
    commissionGoalType?: EnumCommissionGoalTypeFieldUpdateOperationsInput;
    commissionType?: EnumCommissionTypeFieldUpdateOperationsInput;
}
