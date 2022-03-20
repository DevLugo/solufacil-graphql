import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContractCreateWithoutContractTypeInput } from './contract-create-without-contract-type.input';
import { ContractCreateOrConnectWithoutContractTypeInput } from './contract-create-or-connect-without-contract-type.input';
import { ContractCreateManyContractTypeInputEnvelope } from './contract-create-many-contract-type-input-envelope.input';
import { ContractWhereUniqueInput } from './contract-where-unique.input';

@InputType()
export class ContractUncheckedCreateNestedManyWithoutContractTypeInput {

    @Field(() => [ContractCreateWithoutContractTypeInput], {nullable:true})
    create?: Array<ContractCreateWithoutContractTypeInput>;

    @Field(() => [ContractCreateOrConnectWithoutContractTypeInput], {nullable:true})
    connectOrCreate?: Array<ContractCreateOrConnectWithoutContractTypeInput>;

    @Field(() => ContractCreateManyContractTypeInputEnvelope, {nullable:true})
    createMany?: ContractCreateManyContractTypeInputEnvelope;

    @Field(() => [ContractWhereUniqueInput], {nullable:true})
    connect?: Array<ContractWhereUniqueInput>;
}
