import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class LoanPaymentAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    numeration?: true;

    @Field(() => Boolean, {nullable:true})
    amount?: true;
}
