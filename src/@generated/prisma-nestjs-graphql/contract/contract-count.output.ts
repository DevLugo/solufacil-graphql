import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ContractCount {

    @Field(() => Int, {nullable:false})
    Documents!: number;

    @Field(() => Int, {nullable:false})
    Loans!: number;
}
