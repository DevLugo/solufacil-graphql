import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanState } from '../prisma/loan-state.enum';
import { HideField } from '@nestjs/graphql';
import { LoanPaymentCreateNestedManyWithoutLoanInput } from '../loan-payment/loan-payment-create-nested-many-without-loan.input';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { EmployeeCreateNestedOneWithoutLoanInput } from '../employee/employee-create-nested-one-without-loan.input';
import { ContractCreateNestedOneWithoutLoansInput } from '../contract/contract-create-nested-one-without-loans.input';
import { PaymentScheduleCreateNestedManyWithoutLoanInput } from '../payment-schedule/payment-schedule-create-nested-many-without-loan.input';
import { CommissionPaymentCreateNestedManyWithoutLoanInput } from '../commission-payment/commission-payment-create-nested-many-without-loan.input';

@InputType()
export class LoanCreateWithoutLoanTypeInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @HideField()
    status!: keyof typeof LoanState;

    @HideField()
    payments?: LoanPaymentCreateNestedManyWithoutLoanInput;

    @Field(() => GraphQLDecimal, {nullable:false})
    weeklyPaymentAmount!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    amountToPay?: Decimal;

    @Field(() => Date, {nullable:true})
    signDate?: Date | string;

    @HideField()
    createdAt?: Date | string;

    @Field(() => EmployeeCreateNestedOneWithoutLoanInput, {nullable:false})
    employee!: EmployeeCreateNestedOneWithoutLoanInput;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => ContractCreateNestedOneWithoutLoansInput, {nullable:false})
    contract!: ContractCreateNestedOneWithoutLoansInput;

    @Field(() => PaymentScheduleCreateNestedManyWithoutLoanInput, {nullable:true})
    paymentSchedule?: PaymentScheduleCreateNestedManyWithoutLoanInput;

    @Field(() => CommissionPaymentCreateNestedManyWithoutLoanInput, {nullable:true})
    CommissionPayment?: CommissionPaymentCreateNestedManyWithoutLoanInput;
}
