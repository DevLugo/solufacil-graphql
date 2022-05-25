import { CommissionType } from './commission-type.enum';
import { NestedEnumCommissionTypeWithAggregatesFilter } from './nested-enum-commission-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumCommissionTypeFilter } from './nested-enum-commission-type-filter.input';
export declare class EnumCommissionTypeWithAggregatesFilter {
    equals?: keyof typeof CommissionType;
    in?: Array<keyof typeof CommissionType>;
    notIn?: Array<keyof typeof CommissionType>;
    not?: NestedEnumCommissionTypeWithAggregatesFilter;
    _count?: NestedIntFilter;
    _min?: NestedEnumCommissionTypeFilter;
    _max?: NestedEnumCommissionTypeFilter;
}
