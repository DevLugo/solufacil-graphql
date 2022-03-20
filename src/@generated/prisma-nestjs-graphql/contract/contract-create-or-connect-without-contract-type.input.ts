import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContractWhereUniqueInput } from './contract-where-unique.input';
import { ContractCreateWithoutContractTypeInput } from './contract-create-without-contract-type.input';

@InputType()
export class ContractCreateOrConnectWithoutContractTypeInput {

    @Field(() => ContractWhereUniqueInput, {nullable:false})
    where!: ContractWhereUniqueInput;

    @Field(() => ContractCreateWithoutContractTypeInput, {nullable:false})
    create!: ContractCreateWithoutContractTypeInput;
}
