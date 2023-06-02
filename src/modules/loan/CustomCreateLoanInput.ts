import { Field, InputType } from "@nestjs/graphql";
import { GraphQLDate } from "graphql-scalars";
import { LoanCreateInput } from "../../@generated/loan/loan-create.input";

@InputType()
export class CustomCreateLoanInput extends LoanCreateInput{
    @Field(() => GraphQLDate, {nullable:false})
    firstPaymentDate?: Date | string;
    @Field(() => String, {nullable:true})
    renovatedFromId?: string
}

@InputType()
export class CustomCreateManyLoanInput{
    @Field(() => [CustomCreateLoanInput], {nullable:false})
    loans?: CustomCreateLoanInput[];
}