import { CommissionGoalType } from './commission-goal-type.enum';
export declare class NestedEnumCommissionGoalTypeFilter {
    equals?: keyof typeof CommissionGoalType;
    in?: Array<keyof typeof CommissionGoalType>;
    notIn?: Array<keyof typeof CommissionGoalType>;
    not?: NestedEnumCommissionGoalTypeFilter;
}
