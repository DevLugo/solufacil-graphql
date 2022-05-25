import { LoanState } from './loan-state.enum';
import { NestedEnumLoanStateFilter } from './nested-enum-loan-state-filter.input';
export declare class EnumLoanStateFilter {
    equals?: keyof typeof LoanState;
    in?: Array<keyof typeof LoanState>;
    notIn?: Array<keyof typeof LoanState>;
    not?: NestedEnumLoanStateFilter;
}
