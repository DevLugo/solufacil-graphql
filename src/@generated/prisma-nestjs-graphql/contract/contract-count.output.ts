import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ContractCount {

    @Field(() => Int, {nullable:false})
    documents!: number;

    @Field(() => Int, {nullable:false})
    loans!: number;
}
