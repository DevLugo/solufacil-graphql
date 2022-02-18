import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { HideField } from '@nestjs/graphql';
import { PaymentScheduleCreateNestedManyWithoutLoanPaymentsInput } from '../payment-schedule/payment-schedule-create-nested-many-without-loan-payments.input';
import { LoanCreateNestedOneWithoutPaymentsInput } from '../loan/loan-create-nested-one-without-payments.input';

@InputType()
export class LoanPaymentCreateWithoutEmployeeInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    amount!: any;

    @Field(() => Date, {nullable:false})
    date!: Date | string;

    @Field(() => String, {nullable:true})
    comments?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => PaymentScheduleCreateNestedManyWithoutLoanPaymentsInput, {nullable:true})
    paymentSchedules?: PaymentScheduleCreateNestedManyWithoutLoanPaymentsInput;

    @Field(() => LoanCreateNestedOneWithoutPaymentsInput, {nullable:false})
    loan!: LoanCreateNestedOneWithoutPaymentsInput;
}
