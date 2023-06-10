import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Decimal } from "@prisma/client/runtime";
import { GraphQLDecimal } from "prisma-graphql-type-decimal";

@ObjectType()
export class LoanPayment {
    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    amount!: Decimal;
    
    @Field(() => GraphQLDecimal, {nullable:false})
    percentage!: Decimal;
    
    @Field(() => String, {nullable:false})
    loanId!: string;

    @Field(() => String, {nullable:false})
    collectorId: string;

    @Field(() => String, {nullable:false})
    leadPaymentReceivedId

    //Todo: comments
    //TODO: PaymentSchedule
    //loan

    @Field(() => GraphQLDecimal, {nullable:false})
    profitAmount!: Decimal;
    
    @Field(() => GraphQLDecimal, {nullable:false})
    returnToCapital!: Decimal;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}