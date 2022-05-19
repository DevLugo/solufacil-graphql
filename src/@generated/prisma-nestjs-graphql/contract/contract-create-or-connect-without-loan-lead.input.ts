import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContractWhereUniqueInput } from './contract-where-unique.input';
import { ContractCreateWithoutLoanLeadInput } from './contract-create-without-loan-lead.input';

@InputType()
export class ContractCreateOrConnectWithoutLoanLeadInput {

    @Field(() => ContractWhereUniqueInput, {nullable:false})
    where!: ContractWhereUniqueInput;

    @Field(() => ContractCreateWithoutLoanLeadInput, {nullable:false})
    create!: ContractCreateWithoutLoanLeadInput;
}
