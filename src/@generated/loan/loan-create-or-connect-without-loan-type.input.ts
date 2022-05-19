import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanWhereUniqueInput } from './loan-where-unique.input';
import { LoanCreateWithoutLoanTypeInput } from './loan-create-without-loan-type.input';

@InputType()
export class LoanCreateOrConnectWithoutLoanTypeInput {

    @Field(() => LoanWhereUniqueInput, {nullable:false})
    where!: LoanWhereUniqueInput;

    @Field(() => LoanCreateWithoutLoanTypeInput, {nullable:false})
    create!: LoanCreateWithoutLoanTypeInput;
}
