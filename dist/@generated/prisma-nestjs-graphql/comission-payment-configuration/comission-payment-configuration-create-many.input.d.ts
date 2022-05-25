import { EmployeesTypes } from '../prisma/employees-types.enum';
import { CommissionGoalType } from '../prisma/commission-goal-type.enum';
import { CommissionType } from '../prisma/commission-type.enum';
export declare class ComissionPaymentConfigurationCreateManyInput {
    id?: string;
    employeeType: keyof typeof EmployeesTypes;
    loantypeId: string;
    commissionGoalType: keyof typeof CommissionGoalType;
    commissionType: keyof typeof CommissionType;
}
