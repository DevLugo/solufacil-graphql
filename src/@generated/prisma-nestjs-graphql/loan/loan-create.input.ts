import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { LoanState } from '../prisma/loan-state.enum';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { LoanPaymentCreateNestedManyWithoutLoanInput } from '../loan-payment/loan-payment-create-nested-many-without-loan.input';
import { ContractCreateNestedOneWithoutLoansInput } from '../contract/contract-create-nested-one-without-loans.input';

@InputType()
export class LoanCreateInput {

    @HideField()
    id?: string;

    @HideField()
    status!: keyof typeof LoanState;

    @Field(() => GraphQLDecimal, {nullable:false})
    amount!: any;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => LoanPaymentCreateNestedManyWithoutLoanInput, {nullable:true})
    payments?: LoanPaymentCreateNestedManyWithoutLoanInput;

    @Field(() => ContractCreateNestedOneWithoutLoansInput, {nullable:true})
    Contract?: ContractCreateNestedOneWithoutLoansInput;
}
