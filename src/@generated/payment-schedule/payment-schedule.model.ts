import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime';
import { PaymentState } from '../prisma/payment-state.enum';
import { Loan } from '../loan/loan.model';
import { LoanPayment } from '../loan-payment/loan-payment.model';
import { CommissionPayment } from '../commission-payment/commission-payment.model';
import { PaymentScheduleCount } from './payment-schedule-count.output';

@ObjectType()
export class PaymentSchedule {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:false})
    numeration!: number;

    @Field(() => GraphQLDecimal, {nullable:false})
    amountToPay!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    paidAmount!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false,defaultValue:0})
    returnToCapital!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false,defaultValue:0})
    profit!: Decimal;

    @Field(() => PaymentState, {nullable:false})
    status!: keyof typeof PaymentState;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    delayed!: boolean;

    @Field(() => Date, {nullable:false})
    dueDate!: Date;

    @Field(() => String, {nullable:true})
    details!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Loan, {nullable:false})
    loan?: Loan;

    @Field(() => String, {nullable:false})
    loanId!: string;

    @Field(() => [LoanPayment], {nullable:true})
    loanPayments?: Array<LoanPayment>;

    @Field(() => [CommissionPayment], {nullable:true})
    CommissionPayment?: Array<CommissionPayment>;

    @Field(() => PaymentScheduleCount, {nullable:false})
    _count?: PaymentScheduleCount;
}
