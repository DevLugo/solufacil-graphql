import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BorrowerCount {

    @Field(() => Int, {nullable:false})
    phones?: number;

    @Field(() => Int, {nullable:false})
    documents?: number;

    @Field(() => Int, {nullable:false})
    Contract?: number;

    @Field(() => Int, {nullable:false})
    Local?: number;
}