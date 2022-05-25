import { EmployeesTypes } from '../prisma/employees-types.enum';
import { Loantype } from '../loantype/loantype.model';
import { CommissionGoalType } from '../prisma/commission-goal-type.enum';
import { CommissionType } from '../prisma/commission-type.enum';
export declare class ComissionPaymentConfiguration {
    id: string;
    employeeType: keyof typeof EmployeesTypes;
    loanType?: Loantype;
    loantypeId: string;
    commissionGoalType: keyof typeof CommissionGoalType;
    commissionType: keyof typeof CommissionType;
}
