import { Field, ObjectType } from "@nestjs/graphql";
import { Decimal } from "@prisma/client/runtime";
import { Loan } from "../../../@generated/loan/loan.model";
import { GraphQLDecimal } from "prisma-graphql-type-decimal";

@ObjectType()
export class ILoanRenovationPayload {
    @Field(() => GraphQLDecimal, {nullable:false})
    maxAmount: Decimal;
    @Field(() => GraphQLDecimal, {nullable:false})
    pendingAmount: Decimal;
    @Field(() => Loan , {nullable:false})
    prevloan: Loan;
}