import { CommissionType } from './commission-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumCommissionTypeFilter } from './nested-enum-commission-type-filter.input';
export declare class NestedEnumCommissionTypeWithAggregatesFilter {
    equals?: keyof typeof CommissionType;
    in?: Array<keyof typeof CommissionType>;
    notIn?: Array<keyof typeof CommissionType>;
    not?: NestedEnumCommissionTypeWithAggregatesFilter;
    _count?: NestedIntFilter;
    _min?: NestedEnumCommissionTypeFilter;
    _max?: NestedEnumCommissionTypeFilter;
}
