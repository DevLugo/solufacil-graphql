import { EmployeesTypes } from '../prisma/employees-types.enum';
import { CommissionGoalType } from '../prisma/commission-goal-type.enum';
import { CommissionType } from '../prisma/commission-type.enum';
export declare class ComissionPaymentConfigurationUncheckedCreateWithoutLoanTypeInput {
    id?: string;
    employeeType: keyof typeof EmployeesTypes;
    commissionGoalType: keyof typeof CommissionGoalType;
    commissionType: keyof typeof CommissionType;
}
