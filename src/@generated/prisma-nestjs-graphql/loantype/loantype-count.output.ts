import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class LoantypeCount {

    @Field(() => Int, {nullable:false})
    Loan!: number;
}
