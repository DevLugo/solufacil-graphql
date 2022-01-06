import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContractCreateWithoutEmployerInput } from './contract-create-without-employer.input';
import { ContractCreateOrConnectWithoutEmployerInput } from './contract-create-or-connect-without-employer.input';
import { ContractUpsertWithWhereUniqueWithoutEmployerInput } from './contract-upsert-with-where-unique-without-employer.input';
import { ContractCreateManyEmployerInputEnvelope } from './contract-create-many-employer-input-envelope.input';
import { ContractWhereUniqueInput } from './contract-where-unique.input';
import { ContractUpdateWithWhereUniqueWithoutEmployerInput } from './contract-update-with-where-unique-without-employer.input';
import { ContractUpdateManyWithWhereWithoutEmployerInput } from './contract-update-many-with-where-without-employer.input';
import { ContractScalarWhereInput } from './contract-scalar-where.input';

@InputType()
export class ContractUncheckedUpdateManyWithoutEmployerInput {

    @Field(() => [ContractCreateWithoutEmployerInput], {nullable:true})
    create?: Array<ContractCreateWithoutEmployerInput>;

    @Field(() => [ContractCreateOrConnectWithoutEmployerInput], {nullable:true})
    connectOrCreate?: Array<ContractCreateOrConnectWithoutEmployerInput>;

    @Field(() => [ContractUpsertWithWhereUniqueWithoutEmployerInput], {nullable:true})
    upsert?: Array<ContractUpsertWithWhereUniqueWithoutEmployerInput>;

    @Field(() => ContractCreateManyEmployerInputEnvelope, {nullable:true})
    createMany?: ContractCreateManyEmployerInputEnvelope;

    @Field(() => [ContractWhereUniqueInput], {nullable:true})
    set?: Array<ContractWhereUniqueInput>;

    @Field(() => [ContractWhereUniqueInput], {nullable:true})
    disconnect?: Array<ContractWhereUniqueInput>;

    @Field(() => [ContractWhereUniqueInput], {nullable:true})
    delete?: Array<ContractWhereUniqueInput>;

    @Field(() => [ContractWhereUniqueInput], {nullable:true})
    connect?: Array<ContractWhereUniqueInput>;

    @Field(() => [ContractUpdateWithWhereUniqueWithoutEmployerInput], {nullable:true})
    update?: Array<ContractUpdateWithWhereUniqueWithoutEmployerInput>;

    @Field(() => [ContractUpdateManyWithWhereWithoutEmployerInput], {nullable:true})
    updateMany?: Array<ContractUpdateManyWithWhereWithoutEmployerInput>;

    @Field(() => [ContractScalarWhereInput], {nullable:true})
    deleteMany?: Array<ContractScalarWhereInput>;
}
