import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanState } from '../prisma/loan-state.enum';
import { HideField } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { LoanPaymentCreateNestedManyWithoutLoanInput } from '../loan-payment/loan-payment-create-nested-many-without-loan.input';
import { EmployeeCreateNestedOneWithoutLoanInput } from '../employee/employee-create-nested-one-without-loan.input';
import { ContractCreateNestedOneWithoutLoansInput } from '../contract/contract-create-nested-one-without-loans.input';
import { PaymentScheduleCreateNestedManyWithoutLoanInput } from '../payment-schedule/payment-schedule-create-nested-many-without-loan.input';

@InputType()
export class LoanCreateWithoutLoanTypeInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @HideField()
    status!: keyof typeof LoanState;

    @Field(() => GraphQLDecimal, {nullable:false})
    weeklyPaymentAmount!: any;

    @Field(() => GraphQLDecimal, {nullable:true})
    amountToPay?: any;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    payments?: LoanPaymentCreateNestedManyWithoutLoanInput;

    @Field(() => EmployeeCreateNestedOneWithoutLoanInput, {nullable:false})
    employee!: EmployeeCreateNestedOneWithoutLoanInput;

    @Field(() => ContractCreateNestedOneWithoutLoansInput, {nullable:false})
    contract!: ContractCreateNestedOneWithoutLoansInput;

    @Field(() => PaymentScheduleCreateNestedManyWithoutLoanInput, {nullable:true})
    paymentSchedule?: PaymentScheduleCreateNestedManyWithoutLoanInput;
}
