import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ContractTypeAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    weekDuration?: true;

    @Field(() => Boolean, {nullable:true})
    amount?: true;

    @Field(() => Boolean, {nullable:true})
    rate?: true;
}
