import { EmployeesTypes } from '../prisma/employees-types.enum';
import { LoantypeCreateNestedOneWithoutComissionPaymentConfigurationInput } from '../loantype/loantype-create-nested-one-without-comission-payment-configuration.input';
import { CommissionGoalType } from '../prisma/commission-goal-type.enum';
import { CommissionType } from '../prisma/commission-type.enum';
export declare class ComissionPaymentConfigurationCreateInput {
    id?: string;
    employeeType: keyof typeof EmployeesTypes;
    loanType: LoantypeCreateNestedOneWithoutComissionPaymentConfigurationInput;
    commissionGoalType: keyof typeof CommissionGoalType;
    commissionType: keyof typeof CommissionType;
}
