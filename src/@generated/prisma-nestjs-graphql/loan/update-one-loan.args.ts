import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoanUpdateInput } from './loan-update.input';
import { LoanWhereUniqueInput } from './loan-where-unique.input';

@ArgsType()
export class UpdateOneLoanArgs {

    @Field(() => LoanUpdateInput, {nullable:false})
    data!: LoanUpdateInput;

    @Field(() => LoanWhereUniqueInput, {nullable:false})
    where!: LoanWhereUniqueInput;
}
