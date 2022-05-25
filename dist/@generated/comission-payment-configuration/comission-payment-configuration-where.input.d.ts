import { StringFilter } from '../prisma/string-filter.input';
import { EnumEmployeesTypesFilter } from '../prisma/enum-employees-types-filter.input';
import { LoantypeRelationFilter } from '../loantype/loantype-relation-filter.input';
import { EnumCommissionGoalTypeFilter } from '../prisma/enum-commission-goal-type-filter.input';
import { EnumCommissionTypeFilter } from '../prisma/enum-commission-type-filter.input';
export declare class ComissionPaymentConfigurationWhereInput {
    AND?: Array<ComissionPaymentConfigurationWhereInput>;
    OR?: Array<ComissionPaymentConfigurationWhereInput>;
    NOT?: Array<ComissionPaymentConfigurationWhereInput>;
    id?: StringFilter;
    employeeType?: EnumEmployeesTypesFilter;
    loanType?: LoantypeRelationFilter;
    loantypeId?: StringFilter;
    commissionGoalType?: EnumCommissionGoalTypeFilter;
    commissionType?: EnumCommissionTypeFilter;
}
