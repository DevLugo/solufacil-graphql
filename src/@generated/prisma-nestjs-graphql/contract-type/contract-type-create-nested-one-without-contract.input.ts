import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContractTypeCreateWithoutContractInput } from './contract-type-create-without-contract.input';
import { ContractTypeCreateOrConnectWithoutContractInput } from './contract-type-create-or-connect-without-contract.input';
import { ContractTypeWhereUniqueInput } from './contract-type-where-unique.input';

@InputType()
export class ContractTypeCreateNestedOneWithoutContractInput {

    @Field(() => ContractTypeCreateWithoutContractInput, {nullable:true})
    create?: ContractTypeCreateWithoutContractInput;

    @Field(() => ContractTypeCreateOrConnectWithoutContractInput, {nullable:true})
    connectOrCreate?: ContractTypeCreateOrConnectWithoutContractInput;

    @Field(() => ContractTypeWhereUniqueInput, {nullable:true})
    connect?: ContractTypeWhereUniqueInput;
}
