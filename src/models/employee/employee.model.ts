import { Field, ID, ObjectType } from "@nestjs/graphql";
import { EmployeesTypes } from "@prisma/client";
import { User } from "../user/user.model";

@ObjectType()
export class Employee {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => EmployeesTypes, {nullable:false})
    type!: keyof typeof EmployeesTypes;

    @Field(() => [Document], {nullable:true})
    documents?: Array<Document>;

    @Field(() => User, {nullable:false})
    user?: User;

    /* @Field(() => PersonalData, {nullable:false})
    personalData?: PersonalData; */

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    /* @Field(() => [Loan], {nullable:true})
    loan?: Array<Loan>;
 */
    @Field(() => String, {nullable:false})
    userId!: string;

    /* @Field(() => [LoanPayment], {nullable:true})
    loanPayment?: Array<LoanPayment>;
 */
    /* @Field(() => [CommissionPayment], {nullable:true})
    commissionPayment?: Array<CommissionPayment>;
 */
    /* @Field(() => [Contract], {nullable:true})
    contractEmployee?: Array<Contract>;
 */
    /* @Field(() => [Contract], {nullable:true})
    contractLoanLead?: Array<Contract>; */

    /* @Field(() => [Expenses], {nullable:true})
    expenses?: Array<Expenses>; */

    @Field(() => String, {nullable:false})
    personalDataId!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    amountGivedIncreased!: boolean;
}
    /* @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>; */

    /* @Field(() => [Route], {nullable:true})
    routes?: Array<Route>; */

    /* @Field(() => [Borrower], {nullable:true})
    borrower?: Array<Borrower>; */
/* 
    @Field(() => [LeadPaymentReceived], {nullable:true})
    leadPaymentsReceivedLead?: Array<LeadPaymentReceived>;

    @Field(() => [LeadPaymentReceived], {nullable:true})
    leadPaymentReceivedAgent?: Array<LeadPaymentReceived>;

    @Field(() => [ComissionPaymentConfiguration], {nullable:true})
    comissionPaymentConfiguration?: Array<ComissionPaymentConfiguration>; */