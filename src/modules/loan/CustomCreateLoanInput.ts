import { Field, InputType, OmitType } from "@nestjs/graphql";
import { GraphQLDate } from "graphql-scalars";
import { LoanCreateInput } from "../../@generated/loan/loan-create.input";

@InputType()
export class CustomCreateLoanInput extends LoanCreateInput {
    @Field(() => GraphQLDate, { nullable: false })
    firstPaymentDate?: Date | string;
    @Field(() => String, { nullable: true })
    renovatedFromId?: string
    @Field(() => String, { nullable: false })
    borrowerId: string
}
@InputType()
export class CustomCreateLoanInputWithoutEmployee extends OmitType(
    CustomCreateLoanInput,
    [
        'employee',
        'documents',
        'amountToPay',
        'finishedDate',
        'paymentSchedule',
        'commissionPayment',
        'weeklyPaymentAmount',
        'previousAmountGived',
    ],
) { }

@InputType()
export class CustomCreateManyLoanInput {
    @Field(() => [CustomCreateLoanInputWithoutEmployee], { nullable: false })
    loans: CustomCreateLoanInputWithoutEmployee[];
}