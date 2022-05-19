import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { PaymentState } from '../prisma/payment-state.enum';
import { LoanCreateNestedOneWithoutPaymentScheduleInput } from '../loan/loan-create-nested-one-without-payment-schedule.input';
import { LoanPaymentCreateNestedManyWithoutPaymentSchedulesInput } from '../loan-payment/loan-payment-create-nested-many-without-payment-schedules.input';

@InputType()
export class PaymentScheduleCreateWithoutCommissionPaymentInput {

    @HideField()
    id?: string;

    @Field(() => Int, {nullable:false})
    numeration!: number;

    @Field(() => GraphQLDecimal, {nullable:false})
    amountToPay!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    paidAmount!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    returnToCapital?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    profit?: Decimal;

    @HideField()
    status!: keyof typeof PaymentState;

    @Field(() => Boolean, {nullable:true})
    delayed?: boolean;

    @Field(() => Date, {nullable:false})
    dueDate!: Date | string;

    @Field(() => String, {nullable:true})
    details?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => LoanCreateNestedOneWithoutPaymentScheduleInput, {nullable:false})
    loan!: LoanCreateNestedOneWithoutPaymentScheduleInput;

    @Field(() => LoanPaymentCreateNestedManyWithoutPaymentSchedulesInput, {nullable:true})
    loanPayments?: LoanPaymentCreateNestedManyWithoutPaymentSchedulesInput;
}
