import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';

@InputType()
export class AvalWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Scalars.GraphQLEmailAddress, {nullable:true})
    email?: string;
}
