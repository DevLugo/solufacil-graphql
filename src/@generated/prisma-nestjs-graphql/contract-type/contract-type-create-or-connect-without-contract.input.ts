import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContractTypeWhereUniqueInput } from './contract-type-where-unique.input';
import { ContractTypeCreateWithoutContractInput } from './contract-type-create-without-contract.input';

@InputType()
export class ContractTypeCreateOrConnectWithoutContractInput {

    @Field(() => ContractTypeWhereUniqueInput, {nullable:false})
    where!: ContractTypeWhereUniqueInput;

    @Field(() => ContractTypeCreateWithoutContractInput, {nullable:false})
    create!: ContractTypeCreateWithoutContractInput;
}
