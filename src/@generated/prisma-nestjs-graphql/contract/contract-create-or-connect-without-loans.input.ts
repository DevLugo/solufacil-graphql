import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContractWhereUniqueInput } from './contract-where-unique.input';
import { ContractCreateWithoutLoansInput } from './contract-create-without-loans.input';

@InputType()
export class ContractCreateOrConnectWithoutLoansInput {

    @Field(() => ContractWhereUniqueInput, {nullable:false})
    where!: ContractWhereUniqueInput;

    @Field(() => ContractCreateWithoutLoansInput, {nullable:false})
    create!: ContractCreateWithoutLoansInput;
}
