import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoanWhereUniqueInput } from './loan-where-unique.input';

@ArgsType()
export class DeleteOneLoanArgs {

    @Field(() => LoanWhereUniqueInput, {nullable:false})
    where!: LoanWhereUniqueInput;
}
