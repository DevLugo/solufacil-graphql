import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class LoanSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    weeklyPaymentAmount?: true;

    @Field(() => Boolean, {nullable:true})
    amountToPay?: true;
}
