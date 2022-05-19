import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ContractTypeSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    monthDuration?: true;

    @Field(() => Boolean, {nullable:true})
    amount?: true;

    @Field(() => Boolean, {nullable:true})
    maxRate?: true;
}
