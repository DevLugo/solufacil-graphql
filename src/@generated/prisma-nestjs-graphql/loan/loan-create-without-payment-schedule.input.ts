import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanState } from '../prisma/loan-state.enum';
import { HideField } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { LoanPaymentCreateNestedManyWithoutLoanInput } from '../loan-payment/loan-payment-create-nested-many-without-loan.input';
import { LoantypeCreateNestedOneWithoutLoanInput } from '../loantype/loantype-create-nested-one-without-loan.input';
import { EmployeeCreateNestedOneWithoutLoanInput } from '../employee/employee-create-nested-one-without-loan.input';
import { ContractCreateNestedOneWithoutLoansInput } from '../contract/contract-create-nested-one-without-loans.input';

@InputType()
export class LoanCreateWithoutPaymentScheduleInput {

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

    @HideField()
    payments?: LoanPaymentCreateNestedManyWithoutLoanInput;

    @Field(() => LoantypeCreateNestedOneWithoutLoanInput, {nullable:false})
    loanType!: LoantypeCreateNestedOneWithoutLoanInput;

    @Field(() => EmployeeCreateNestedOneWithoutLoanInput, {nullable:false})
    employee!: EmployeeCreateNestedOneWithoutLoanInput;

    @Field(() => ContractCreateNestedOneWithoutLoansInput, {nullable:false})
    contract!: ContractCreateNestedOneWithoutLoansInput;
}
