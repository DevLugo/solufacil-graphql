import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContractWhereUniqueInput } from './contract-where-unique.input';
import { ContractUpdateWithoutContractTypeInput } from './contract-update-without-contract-type.input';
import { ContractCreateWithoutContractTypeInput } from './contract-create-without-contract-type.input';

@InputType()
export class ContractUpsertWithWhereUniqueWithoutContractTypeInput {

    @Field(() => ContractWhereUniqueInput, {nullable:false})
    where!: ContractWhereUniqueInput;

    @Field(() => ContractUpdateWithoutContractTypeInput, {nullable:false})
    update!: ContractUpdateWithoutContractTypeInput;

    @Field(() => ContractCreateWithoutContractTypeInput, {nullable:false})
    create!: ContractCreateWithoutContractTypeInput;
}
