import { CommissionGoalType } from './commission-goal-type.enum';
import { NestedEnumCommissionGoalTypeFilter } from './nested-enum-commission-goal-type-filter.input';
export declare class EnumCommissionGoalTypeFilter {
    equals?: keyof typeof CommissionGoalType;
    in?: Array<keyof typeof CommissionGoalType>;
    notIn?: Array<keyof typeof CommissionGoalType>;
    not?: NestedEnumCommissionGoalTypeFilter;
}
