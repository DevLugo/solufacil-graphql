import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class EmployeeMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    type?: true;

    @Field(() => Boolean, {nullable:true})
    email?: true;

    @Field(() => Boolean, {nullable:true})
    fullName?: true;

    @Field(() => Boolean, {nullable:true})
    firstName?: true;

    @Field(() => Boolean, {nullable:true})
    lastName?: true;

    @HideField()
    createdAt?: true;

    @HideField()
    updatedAt?: true;
}
