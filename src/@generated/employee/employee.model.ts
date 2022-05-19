import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { EmployeesTypes } from '../prisma/employees-types.enum';
import { Phone } from '../phone/phone.model';
import { Document } from '../document/document.model';
import { User } from '../user/user.model';
import { Loan } from '../loan/loan.model';
import { LoanPayment } from '../loan-payment/loan-payment.model';
import { CommissionPayment } from '../commission-payment/commission-payment.model';
import { Contract } from '../contract/contract.model';
import { Expenses } from '../expenses/expenses.model';
import { EmployeeCount } from './employee-count.output';

@ObjectType()
export class Employee {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => EmployeesTypes, {nullable:false})
    type!: keyof typeof EmployeesTypes;

    @Field(() => [Phone], {nullable:true})
    phones?: Array<Phone>;

    @Field(() => [Document], {nullable:true})
    documents?: Array<Document>;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Loan], {nullable:true})
    loan?: Array<Loan>;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => [LoanPayment], {nullable:true})
    loanPayment?: Array<LoanPayment>;

    @Field(() => [CommissionPayment], {nullable:true})
    commissionPayment?: Array<CommissionPayment>;

    @Field(() => [Contract], {nullable:true})
    contractEmployee?: Array<Contract>;

    @Field(() => [Contract], {nullable:true})
    contractLoanLead?: Array<Contract>;

    @Field(() => [Expenses], {nullable:true})
    Expenses?: Array<Expenses>;

    @Field(() => EmployeeCount, {nullable:false})
    _count?: EmployeeCount;
}
