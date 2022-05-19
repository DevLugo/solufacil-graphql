import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContractWhereUniqueInput } from './contract-where-unique.input';
import { ContractUpdateWithoutLoanLeadInput } from './contract-update-without-loan-lead.input';
import { ContractCreateWithoutLoanLeadInput } from './contract-create-without-loan-lead.input';

@InputType()
export class ContractUpsertWithWhereUniqueWithoutLoanLeadInput {

    @Field(() => ContractWhereUniqueInput, {nullable:false})
    where!: ContractWhereUniqueInput;

    @Field(() => ContractUpdateWithoutLoanLeadInput, {nullable:false})
    update!: ContractUpdateWithoutLoanLeadInput;

    @Field(() => ContractCreateWithoutLoanLeadInput, {nullable:false})
    create!: ContractCreateWithoutLoanLeadInput;
}
