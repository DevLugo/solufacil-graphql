import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime';
import { PaymentSchedule } from '../payment-schedule/payment-schedule.model';
import { Loan } from '../loan/loan.model';
import { Employee } from '../employee/employee.model';
import { LoanPaymentCount } from '../loan/loan-payment-count.output';

@ObjectType()
export class LoanPayment {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    amount!: Decimal;

    @Field(() => Date, {nullable:false})
    date!: Date;

    @Field(() => String, {nullable:true})
    comments!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [PaymentSchedule], {nullable:true})
    paymentSchedules?: Array<PaymentSchedule>;

    @Field(() => Loan, {nullable:false})
    loan?: Loan;

    @Field(() => String, {nullable:false})
    loanId!: string;

    @Field(() => Employee, {nullable:false})
    employee?: Employee;

    @Field(() => String, {nullable:false})
    employeeId!: string;

    @Field(() => LoanPaymentCount, {nullable:false})
    _count?: LoanPaymentCount;
}
