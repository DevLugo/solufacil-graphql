import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { LoanCreateNestedOneWithoutCommissionPaymentInput } from '../loan/loan-create-nested-one-without-commission-payment.input';
import { EmployeeCreateNestedOneWithoutCommissionPaymentInput } from '../employee/employee-create-nested-one-without-commission-payment.input';
import { CommissionPaymentStatus } from '../prisma/commission-payment-status.enum';

@InputType()
export class CommissionPaymentCreateWithoutPaymentScheduleInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    amount!: Decimal;

    @Field(() => LoanCreateNestedOneWithoutCommissionPaymentInput, {nullable:true})
    loan?: LoanCreateNestedOneWithoutCommissionPaymentInput;

    @Field(() => EmployeeCreateNestedOneWithoutCommissionPaymentInput, {nullable:false})
    employee!: EmployeeCreateNestedOneWithoutCommissionPaymentInput;

    @Field(() => CommissionPaymentStatus, {nullable:false})
    status!: keyof typeof CommissionPaymentStatus;
}
