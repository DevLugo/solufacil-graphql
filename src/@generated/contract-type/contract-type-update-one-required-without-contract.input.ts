import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContractTypeCreateWithoutContractInput } from './contract-type-create-without-contract.input';
import { ContractTypeCreateOrConnectWithoutContractInput } from './contract-type-create-or-connect-without-contract.input';
import { ContractTypeUpsertWithoutContractInput } from './contract-type-upsert-without-contract.input';
import { ContractTypeWhereUniqueInput } from './contract-type-where-unique.input';
import { ContractTypeUpdateWithoutContractInput } from './contract-type-update-without-contract.input';

@InputType()
export class ContractTypeUpdateOneRequiredWithoutContractInput {

    @Field(() => ContractTypeCreateWithoutContractInput, {nullable:true})
    create?: ContractTypeCreateWithoutContractInput;

    @Field(() => ContractTypeCreateOrConnectWithoutContractInput, {nullable:true})
    connectOrCreate?: ContractTypeCreateOrConnectWithoutContractInput;

    @Field(() => ContractTypeUpsertWithoutContractInput, {nullable:true})
    upsert?: ContractTypeUpsertWithoutContractInput;

    @Field(() => ContractTypeWhereUniqueInput, {nullable:true})
    connect?: ContractTypeWhereUniqueInput;

    @Field(() => ContractTypeUpdateWithoutContractInput, {nullable:true})
    update?: ContractTypeUpdateWithoutContractInput;
}
