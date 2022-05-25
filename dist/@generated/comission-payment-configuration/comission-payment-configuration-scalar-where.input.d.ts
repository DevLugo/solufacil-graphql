import { StringFilter } from '../prisma/string-filter.input';
import { EnumEmployeesTypesFilter } from '../prisma/enum-employees-types-filter.input';
import { EnumCommissionGoalTypeFilter } from '../prisma/enum-commission-goal-type-filter.input';
import { EnumCommissionTypeFilter } from '../prisma/enum-commission-type-filter.input';
export declare class ComissionPaymentConfigurationScalarWhereInput {
    AND?: Array<ComissionPaymentConfigurationScalarWhereInput>;
    OR?: Array<ComissionPaymentConfigurationScalarWhereInput>;
    NOT?: Array<ComissionPaymentConfigurationScalarWhereInput>;
    id?: StringFilter;
    employeeType?: EnumEmployeesTypesFilter;
    loantypeId?: StringFilter;
    commissionGoalType?: EnumCommissionGoalTypeFilter;
    commissionType?: EnumCommissionTypeFilter;
}
