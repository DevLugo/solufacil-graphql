import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoanWhereUniqueInput } from './loan-where-unique.input';

@ArgsType()
export class FindUniqueLoanArgs {

    @Field(() => LoanWhereUniqueInput, {nullable:false})
    where!: LoanWhereUniqueInput;
}
