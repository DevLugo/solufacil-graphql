import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanState } from '../prisma/loan-state.enum';
import { HideField } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { LoanPaymentUncheckedCreateNestedManyWithoutLoanInput } from '../loan-payment/loan-payment-unchecked-create-nested-many-without-loan.input';
import { PaymentScheduleUncheckedCreateNestedManyWithoutLoanInput } from '../payment-schedule/payment-schedule-unchecked-create-nested-many-without-loan.input';

@InputType()
export class LoanUncheckedCreateWithoutEmployeeInput {

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

    @HideField()
    payments?: LoanPaymentUncheckedCreateNestedManyWithoutLoanInput;

    @Field(() => PaymentScheduleUncheckedCreateNestedManyWithoutLoanInput, {nullable:true})
    paymentSchedule?: PaymentScheduleUncheckedCreateNestedManyWithoutLoanInput;
}
