import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ExpensesAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    amountToPay?: true;
}
