import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class BorrowerMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    address?: true;

    @Field(() => Boolean, {nullable:true})
    email?: true;

    @HideField()
    createdAt?: true;

    @HideField()
    updatedAt?: true;
}
