import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanState } from '../prisma/loan-state.enum';
import { HideField } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { PaymentScheduleUncheckedCreateNestedManyWithoutLoanInput } from '../payment-schedule/payment-schedule-unchecked-create-nested-many-without-loan.input';

@InputType()
export class LoanUncheckedCreateWithoutPaymentsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @HideField()
    status!: keyof typeof LoanState;

    @Field(() => GraphQLDecimal, {nullable:false})
    weeklyPaymentAmount!: any;

    @Field(() => GraphQLDecimal, {nullable:true})
    amountToPay?: any;

    @Field(() => Date, {nullable:true})
    signDate?: Date | string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    contractId!: string;

    @Field(() => String, {nullable:false})
    loantypeId!: string;

    @Field(() => String, {nullable:false})
    employeeId!: string;

    @Field(() => PaymentScheduleUncheckedCreateNestedManyWithoutLoanInput, {nullable:true})
    paymentSchedule?: PaymentScheduleUncheckedCreateNestedManyWithoutLoanInput;
}
