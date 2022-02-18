import { Field, InputType } from "@nestjs/graphql";
import { GraphQLDate } from "graphql-scalars";
import { LoanCreateInput } from "../../@generated/prisma-nestjs-graphql/loan/loan-create.input";

@InputType()
export class CustomCreateLoanInput extends LoanCreateInput{
    @Field(() => GraphQLDate, {nullable:false})
    firstPaymentDate?: Date | string;
}