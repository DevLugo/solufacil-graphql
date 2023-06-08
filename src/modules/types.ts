import { Field, Float, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class PaymentBreakDown {
    @Field(() => Float, {nullable:false})
    amount!: Number;
    @Field(() => Float, {nullable:false})
    profit!: number;
    @Field(() => Float, {nullable:false})
    returnOfCapital!: Number;
}