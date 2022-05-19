import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { HideField } from '@nestjs/graphql';
import { LoanCreateNestedOneWithoutPaymentsInput } from '../loan/loan-create-nested-one-without-payments.input';
import { EmployeeCreateNestedOneWithoutLoanPaymentInput } from '../employee/employee-create-nested-one-without-loan-payment.input';

@InputType()
export class LoanPaymentCreateWithoutPaymentSchedulesInput {

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

    @Field(() => LoanCreateNestedOneWithoutPaymentsInput, {nullable:false})
    loan!: LoanCreateNestedOneWithoutPaymentsInput;

    @Field(() => EmployeeCreateNestedOneWithoutLoanPaymentInput, {nullable:false})
    employee!: EmployeeCreateNestedOneWithoutLoanPaymentInput;
}