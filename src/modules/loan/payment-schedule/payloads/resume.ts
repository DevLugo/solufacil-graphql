import { Field, ObjectType } from "@nestjs/graphql";
import { Decimal } from "@prisma/client/runtime";
import { Float } from '@nestjs/graphql';

@ObjectType()
export class IResumePayload {
    @Field(() => Float, {nullable:false})
    profit: Number;
    @Field(() => Float, {nullable:false})
    paidOut: Number;
    @Field(() => Float, {nullable:false})
    newLoans: Number;
    @Field(() => Float, {nullable:false})
    returnOfCapital: Number;
    @Field(() => Float, {nullable:false})
    expenses: Number;
}