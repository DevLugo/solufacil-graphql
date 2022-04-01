import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ExpensesSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    amountToPay?: true;
}
