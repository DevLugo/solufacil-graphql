import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanState } from './loan-state.enum';
import { NestedEnumLoanStateFilter } from './nested-enum-loan-state-filter.input';

@InputType()
export class EnumLoanStateFilter {

    @Field(() => LoanState, {nullable:true})
    equals?: keyof typeof LoanState;

    @Field(() => [LoanState], {nullable:true})
    in?: Array<keyof typeof LoanState>;

    @Field(() => [LoanState], {nullable:true})
    notIn?: Array<keyof typeof LoanState>;

    @Field(() => NestedEnumLoanStateFilter, {nullable:true})
    not?: NestedEnumLoanStateFilter;
}
