import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class LoantypeAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    weekDuration?: true;

    @Field(() => Boolean, {nullable:true})
    MaxAmount?: true;

    @Field(() => Boolean, {nullable:true})
    rate?: true;

    @Field(() => Boolean, {nullable:true})
    overdueRate?: true;
}
