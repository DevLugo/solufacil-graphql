import { LoanState } from './loan-state.enum';
import { NestedEnumLoanStateWithAggregatesFilter } from './nested-enum-loan-state-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumLoanStateFilter } from './nested-enum-loan-state-filter.input';
export declare class EnumLoanStateWithAggregatesFilter {
    equals?: keyof typeof LoanState;
    in?: Array<keyof typeof LoanState>;
    notIn?: Array<keyof typeof LoanState>;
    not?: NestedEnumLoanStateWithAggregatesFilter;
    _count?: NestedIntFilter;
    _min?: NestedEnumLoanStateFilter;
    _max?: NestedEnumLoanStateFilter;
}
