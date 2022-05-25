import { CommissionGoalType } from './commission-goal-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumCommissionGoalTypeFilter } from './nested-enum-commission-goal-type-filter.input';
export declare class NestedEnumCommissionGoalTypeWithAggregatesFilter {
    equals?: keyof typeof CommissionGoalType;
    in?: Array<keyof typeof CommissionGoalType>;
    notIn?: Array<keyof typeof CommissionGoalType>;
    not?: NestedEnumCommissionGoalTypeWithAggregatesFilter;
    _count?: NestedIntFilter;
    _min?: NestedEnumCommissionGoalTypeFilter;
    _max?: NestedEnumCommissionGoalTypeFilter;
}
