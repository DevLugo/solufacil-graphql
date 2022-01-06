import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanState } from './loan-state.enum';

@InputType()
export class NestedEnumLoanStateFilter {

    @Field(() => LoanState, {nullable:true})
    equals?: keyof typeof LoanState;

    @Field(() => [LoanState], {nullable:true})
    in?: Array<keyof typeof LoanState>;

    @Field(() => [LoanState], {nullable:true})
    notIn?: Array<keyof typeof LoanState>;

    @Field(() => NestedEnumLoanStateFilter, {nullable:true})
    not?: NestedEnumLoanStateFilter;
}
