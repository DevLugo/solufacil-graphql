import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanWhereUniqueInput } from './loan-where-unique.input';
import { LoanUpdateWithoutLoanTypeInput } from './loan-update-without-loan-type.input';

@InputType()
export class LoanUpdateWithWhereUniqueWithoutLoanTypeInput {

    @Field(() => LoanWhereUniqueInput, {nullable:false})
    where!: LoanWhereUniqueInput;

    @Field(() => LoanUpdateWithoutLoanTypeInput, {nullable:false})
    data!: LoanUpdateWithoutLoanTypeInput;
}
