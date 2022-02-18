import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanWhereUniqueInput } from './loan-where-unique.input';
import { LoanUpdateWithoutLoanTypeInput } from './loan-update-without-loan-type.input';
import { LoanCreateWithoutLoanTypeInput } from './loan-create-without-loan-type.input';

@InputType()
export class LoanUpsertWithWhereUniqueWithoutLoanTypeInput {

    @Field(() => LoanWhereUniqueInput, {nullable:false})
    where!: LoanWhereUniqueInput;

    @Field(() => LoanUpdateWithoutLoanTypeInput, {nullable:false})
    update!: LoanUpdateWithoutLoanTypeInput;

    @Field(() => LoanCreateWithoutLoanTypeInput, {nullable:false})
    create!: LoanCreateWithoutLoanTypeInput;
}
