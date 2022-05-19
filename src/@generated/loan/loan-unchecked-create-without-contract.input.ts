import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanState } from '../prisma/loan-state.enum';
import { HideField } from '@nestjs/graphql';
import { LoanPaymentUncheckedCreateNestedManyWithoutLoanInput } from '../loan-payment/loan-payment-unchecked-create-nested-many-without-loan.input';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { PaymentScheduleUncheckedCreateNestedManyWithoutLoanInput } from '../payment-schedule/payment-schedule-unchecked-create-nested-many-without-loan.input';
import { CommissionPaymentUncheckedCreateNestedManyWithoutLoanInput } from '../commission-payment/commission-payment-unchecked-create-nested-many-without-loan.input';

@InputType()
export class LoanUncheckedCreateWithoutContractInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @HideField()
    status!: keyof typeof LoanState;

    @HideField()
    payments?: LoanPaymentUncheckedCreateNestedManyWithoutLoanInput;

    @Field(() => GraphQLDecimal, {nullable:false})
    weeklyPaymentAmount!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    amountToPay?: Decimal;

    @Field(() => Date, {nullable:true})
    signDate?: Date | string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    loantypeId!: string;

    @Field(() => String, {nullable:false})
    employeeId!: string;

    @Field(() => PaymentScheduleUncheckedCreateNestedManyWithoutLoanInput, {nullable:true})
    paymentSchedule?: PaymentScheduleUncheckedCreateNestedManyWithoutLoanInput;

    @Field(() => CommissionPaymentUncheckedCreateNestedManyWithoutLoanInput, {nullable:true})
    CommissionPayment?: CommissionPaymentUncheckedCreateNestedManyWithoutLoanInput;
}
