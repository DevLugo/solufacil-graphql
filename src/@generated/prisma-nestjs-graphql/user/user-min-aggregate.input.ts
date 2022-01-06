import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    email?: true;

    @HideField()
    fullName?: true;

    @Field(() => Boolean, {nullable:true})
    firstName?: true;

    @Field(() => Boolean, {nullable:true})
    lastName?: true;

    @Field(() => Boolean, {nullable:true})
    password?: true;

    @HideField()
    lastLogin?: true;

    @HideField()
    profilePicture?: true;

    @HideField()
    createdAt?: true;

    @HideField()
    updatedAt?: true;
}
