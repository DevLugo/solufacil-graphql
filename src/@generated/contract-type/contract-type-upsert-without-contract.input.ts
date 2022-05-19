import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContractTypeUpdateWithoutContractInput } from './contract-type-update-without-contract.input';
import { ContractTypeCreateWithoutContractInput } from './contract-type-create-without-contract.input';

@InputType()
export class ContractTypeUpsertWithoutContractInput {

    @Field(() => ContractTypeUpdateWithoutContractInput, {nullable:false})
    update!: ContractTypeUpdateWithoutContractInput;

    @Field(() => ContractTypeCreateWithoutContractInput, {nullable:false})
    create!: ContractTypeCreateWithoutContractInput;
}
