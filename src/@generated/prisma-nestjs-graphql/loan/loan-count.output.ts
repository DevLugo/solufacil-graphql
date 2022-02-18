import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class LoanCount {

    @Field(() => Int, {nullable:false})
    payments!: number;

    @Field(() => Int, {nullable:false})
    paymentSchedule!: number;
}
