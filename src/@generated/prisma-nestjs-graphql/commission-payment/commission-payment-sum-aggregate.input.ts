import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CommissionPaymentSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    amount?: true;
}
