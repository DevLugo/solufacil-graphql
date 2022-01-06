import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanState } from '../prisma/loan-state.enum';
import { HideField } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { ContractCreateNestedOneWithoutLoansInput } from '../contract/contract-create-nested-one-without-loans.input';

@InputType()
export class LoanCreateWithoutPaymentsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @HideField()
    status!: keyof typeof LoanState;

    @Field(() => GraphQLDecimal, {nullable:false})
    amount!: any;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => ContractCreateNestedOneWithoutLoansInput, {nullable:true})
    Contract?: ContractCreateNestedOneWithoutLoansInput;
}
