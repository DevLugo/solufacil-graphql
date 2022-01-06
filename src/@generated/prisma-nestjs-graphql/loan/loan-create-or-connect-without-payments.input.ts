import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanWhereUniqueInput } from './loan-where-unique.input';
import { LoanCreateWithoutPaymentsInput } from './loan-create-without-payments.input';

@InputType()
export class LoanCreateOrConnectWithoutPaymentsInput {

    @Field(() => LoanWhereUniqueInput, {nullable:false})
    where!: LoanWhereUniqueInput;

    @Field(() => LoanCreateWithoutPaymentsInput, {nullable:false})
    create!: LoanCreateWithoutPaymentsInput;
}
