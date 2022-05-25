import { CommissionType } from './commission-type.enum';
import { NestedEnumCommissionTypeFilter } from './nested-enum-commission-type-filter.input';
export declare class EnumCommissionTypeFilter {
    equals?: keyof typeof CommissionType;
    in?: Array<keyof typeof CommissionType>;
    notIn?: Array<keyof typeof CommissionType>;
    not?: NestedEnumCommissionTypeFilter;
}
