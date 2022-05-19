import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanState } from './loan-state.enum';
import { NestedEnumLoanStateWithAggregatesFilter } from './nested-enum-loan-state-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumLoanStateFilter } from './nested-enum-loan-state-filter.input';

@InputType()
export class EnumLoanStateWithAggregatesFilter {

    @Field(() => LoanState, {nullable:true})
    equals?: keyof typeof LoanState;

    @Field(() => [LoanState], {nullable:true})
    in?: Array<keyof typeof LoanState>;

    @Field(() => [LoanState], {nullable:true})
    notIn?: Array<keyof typeof LoanState>;

    @Field(() => NestedEnumLoanStateWithAggregatesFilter, {nullable:true})
    not?: NestedEnumLoanStateWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumLoanStateFilter, {nullable:true})
    _min?: NestedEnumLoanStateFilter;

    @Field(() => NestedEnumLoanStateFilter, {nullable:true})
    _max?: NestedEnumLoanStateFilter;
}
