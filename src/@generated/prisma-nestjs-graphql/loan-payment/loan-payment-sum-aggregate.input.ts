import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class LoanPaymentSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    amount?: true;
}
