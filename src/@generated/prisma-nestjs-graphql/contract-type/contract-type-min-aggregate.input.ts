import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ContractTypeMinAggregateInput {

    @HideField()
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    weekDuration?: true;

    @Field(() => Boolean, {nullable:true})
    amount?: true;

    @Field(() => Boolean, {nullable:true})
    rate?: true;

    @HideField()
    createdAt?: true;

    @HideField()
    updatedAt?: true;
}
