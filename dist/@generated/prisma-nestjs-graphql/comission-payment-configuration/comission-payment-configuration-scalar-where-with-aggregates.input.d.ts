import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumEmployeesTypesWithAggregatesFilter } from '../prisma/enum-employees-types-with-aggregates-filter.input';
import { EnumCommissionGoalTypeWithAggregatesFilter } from '../prisma/enum-commission-goal-type-with-aggregates-filter.input';
import { EnumCommissionTypeWithAggregatesFilter } from '../prisma/enum-commission-type-with-aggregates-filter.input';
export declare class ComissionPaymentConfigurationScalarWhereWithAggregatesInput {
    AND?: Array<ComissionPaymentConfigurationScalarWhereWithAggregatesInput>;
    OR?: Array<ComissionPaymentConfigurationScalarWhereWithAggregatesInput>;
    NOT?: Array<ComissionPaymentConfigurationScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter;
    employeeType?: EnumEmployeesTypesWithAggregatesFilter;
    loantypeId?: StringWithAggregatesFilter;
    commissionGoalType?: EnumCommissionGoalTypeWithAggregatesFilter;
    commissionType?: EnumCommissionTypeWithAggregatesFilter;
}
