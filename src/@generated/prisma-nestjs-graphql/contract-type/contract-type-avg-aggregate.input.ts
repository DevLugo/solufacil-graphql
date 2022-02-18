import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ContractTypeAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    monthDuration?: true;

    @Field(() => Boolean, {nullable:true})
    amount?: true;
}
