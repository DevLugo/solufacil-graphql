import { CommissionType } from './commission-type.enum';
export declare class NestedEnumCommissionTypeFilter {
    equals?: keyof typeof CommissionType;
    in?: Array<keyof typeof CommissionType>;
    notIn?: Array<keyof typeof CommissionType>;
    not?: NestedEnumCommissionTypeFilter;
}
