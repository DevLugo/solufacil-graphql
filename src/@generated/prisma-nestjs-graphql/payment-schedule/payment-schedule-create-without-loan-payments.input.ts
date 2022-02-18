import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { PaymentState } from '../prisma/payment-state.enum';
import { LoanCreateNestedOneWithoutPaymentScheduleInput } from '../loan/loan-create-nested-one-without-payment-schedule.input';

@InputType()
export class PaymentScheduleCreateWithoutLoanPaymentsInput {

    @HideField()
    id?: string;

    @Field(() => Int, {nullable:false})
    numeration!: number;

    @Field(() => GraphQLDecimal, {nullable:false})
    amountToPay!: any;

    @Field(() => GraphQLDecimal, {nullable:false})
    paidAmount!: any;

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
}
