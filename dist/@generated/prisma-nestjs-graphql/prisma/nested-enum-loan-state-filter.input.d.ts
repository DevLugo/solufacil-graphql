import { LoanState } from './loan-state.enum';
export declare class NestedEnumLoanStateFilter {
    equals?: keyof typeof LoanState;
    in?: Array<keyof typeof LoanState>;
    notIn?: Array<keyof typeof LoanState>;
    not?: NestedEnumLoanStateFilter;
}
