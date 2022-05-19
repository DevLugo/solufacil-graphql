import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ContractTypeMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    monthDuration?: true;

    @Field(() => Boolean, {nullable:true})
    amount?: true;

    @Field(() => Boolean, {nullable:true})
    maxRate?: true;

    @HideField()
    createdAt?: true;

    @HideField()
    updatedAt?: true;
}
