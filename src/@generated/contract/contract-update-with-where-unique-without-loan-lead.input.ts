import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContractWhereUniqueInput } from './contract-where-unique.input';
import { ContractUpdateWithoutLoanLeadInput } from './contract-update-without-loan-lead.input';

@InputType()
export class ContractUpdateWithWhereUniqueWithoutLoanLeadInput {

    @Field(() => ContractWhereUniqueInput, {nullable:false})
    where!: ContractWhereUniqueInput;

    @Field(() => ContractUpdateWithoutLoanLeadInput, {nullable:false})
    data!: ContractUpdateWithoutLoanLeadInput;
}
