import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContractCreateWithoutContractTypeInput } from './contract-create-without-contract-type.input';
import { ContractCreateOrConnectWithoutContractTypeInput } from './contract-create-or-connect-without-contract-type.input';
import { ContractUpsertWithWhereUniqueWithoutContractTypeInput } from './contract-upsert-with-where-unique-without-contract-type.input';
import { ContractCreateManyContractTypeInputEnvelope } from './contract-create-many-contract-type-input-envelope.input';
import { ContractWhereUniqueInput } from './contract-where-unique.input';
import { ContractUpdateWithWhereUniqueWithoutContractTypeInput } from './contract-update-with-where-unique-without-contract-type.input';
import { ContractUpdateManyWithWhereWithoutContractTypeInput } from './contract-update-many-with-where-without-contract-type.input';
import { ContractScalarWhereInput } from './contract-scalar-where.input';

@InputType()
export class ContractUpdateManyWithoutContractTypeInput {

    @Field(() => [ContractCreateWithoutContractTypeInput], {nullable:true})
    create?: Array<ContractCreateWithoutContractTypeInput>;

    @Field(() => [ContractCreateOrConnectWithoutContractTypeInput], {nullable:true})
    connectOrCreate?: Array<ContractCreateOrConnectWithoutContractTypeInput>;

    @Field(() => [ContractUpsertWithWhereUniqueWithoutContractTypeInput], {nullable:true})
    upsert?: Array<ContractUpsertWithWhereUniqueWithoutContractTypeInput>;

    @Field(() => ContractCreateManyContractTypeInputEnvelope, {nullable:true})
    createMany?: ContractCreateManyContractTypeInputEnvelope;

    @Field(() => [ContractWhereUniqueInput], {nullable:true})
    set?: Array<ContractWhereUniqueInput>;

    @Field(() => [ContractWhereUniqueInput], {nullable:true})
    disconnect?: Array<ContractWhereUniqueInput>;

    @Field(() => [ContractWhereUniqueInput], {nullable:true})
    delete?: Array<ContractWhereUniqueInput>;

    @Field(() => [ContractWhereUniqueInput], {nullable:true})
    connect?: Array<ContractWhereUniqueInput>;

    @Field(() => [ContractUpdateWithWhereUniqueWithoutContractTypeInput], {nullable:true})
    update?: Array<ContractUpdateWithWhereUniqueWithoutContractTypeInput>;

    @Field(() => [ContractUpdateManyWithWhereWithoutContractTypeInput], {nullable:true})
    updateMany?: Array<ContractUpdateManyWithWhereWithoutContractTypeInput>;

    @Field(() => [ContractScalarWhereInput], {nullable:true})
    deleteMany?: Array<ContractScalarWhereInput>;
}
