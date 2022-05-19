import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime';
import { PaymentSchedule } from '../payment-schedule/payment-schedule.model';
import { Loan } from '../loan/loan.model';
import { Employee } from '../employee/employee.model';
import { CommissionPaymentStatus } from '../prisma/commission-payment-status.enum';

@ObjectType()
export class CommissionPayment {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    amount!: Decimal;

    @Field(() => PaymentSchedule, {nullable:false})
    paymentSchedule?: PaymentSchedule;

    @Field(() => Loan, {nullable:true})
    loan?: Loan | null;

    @Field(() => Employee, {nullable:false})
    employee?: Employee;

    @Field(() => String, {nullable:true})
    loanId!: string | null;

    @Field(() => String, {nullable:false})
    paymentScheduleId!: string;

    @Field(() => String, {nullable:false})
    employeeId!: string;

    @Field(() => CommissionPaymentStatus, {nullable:false})
    status!: keyof typeof CommissionPaymentStatus;
}
