import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class LoanAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    amount?: true;
}
