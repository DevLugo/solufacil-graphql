import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { PaymentScheduleCreateNestedOneWithoutCommissionPaymentInput } from '../payment-schedule/payment-schedule-create-nested-one-without-commission-payment.input';
import { EmployeeCreateNestedOneWithoutCommissionPaymentInput } from '../employee/employee-create-nested-one-without-commission-payment.input';
import { CommissionPaymentStatus } from '../prisma/commission-payment-status.enum';

@InputType()
export class CommissionPaymentCreateWithoutLoanInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    amount!: Decimal;

    @Field(() => PaymentScheduleCreateNestedOneWithoutCommissionPaymentInput, {nullable:false})
    paymentSchedule!: PaymentScheduleCreateNestedOneWithoutCommissionPaymentInput;

    @Field(() => EmployeeCreateNestedOneWithoutCommissionPaymentInput, {nullable:false})
    employee!: EmployeeCreateNestedOneWithoutCommissionPaymentInput;

    @Field(() => CommissionPaymentStatus, {nullable:false})
    status!: keyof typeof CommissionPaymentStatus;
}
