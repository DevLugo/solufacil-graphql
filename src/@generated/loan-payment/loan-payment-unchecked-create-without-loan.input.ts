import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { HideField } from '@nestjs/graphql';
import { PaymentScheduleUncheckedCreateNestedManyWithoutLoanPaymentsInput } from '../payment-schedule/payment-schedule-unchecked-create-nested-many-without-loan-payments.input';

@InputType()
export class LoanPaymentUncheckedCreateWithoutLoanInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    amount!: Decimal;

    @Field(() => Date, {nullable:false})
    date!: Date | string;

    @Field(() => String, {nullable:true})
    comments?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => PaymentScheduleUncheckedCreateNestedManyWithoutLoanPaymentsInput, {nullable:true})
    paymentSchedules?: PaymentScheduleUncheckedCreateNestedManyWithoutLoanPaymentsInput;

    @Field(() => String, {nullable:false})
    employeeId!: string;
}
