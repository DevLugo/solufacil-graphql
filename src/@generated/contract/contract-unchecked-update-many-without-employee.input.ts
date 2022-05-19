import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContractCreateWithoutEmployeeInput } from './contract-create-without-employee.input';
import { ContractCreateOrConnectWithoutEmployeeInput } from './contract-create-or-connect-without-employee.input';
import { ContractUpsertWithWhereUniqueWithoutEmployeeInput } from './contract-upsert-with-where-unique-without-employee.input';
import { ContractCreateManyEmployeeInputEnvelope } from './contract-create-many-employee-input-envelope.input';
import { ContractWhereUniqueInput } from './contract-where-unique.input';
import { ContractUpdateWithWhereUniqueWithoutEmployeeInput } from './contract-update-with-where-unique-without-employee.input';
import { ContractUpdateManyWithWhereWithoutEmployeeInput } from './contract-update-many-with-where-without-employee.input';
import { ContractScalarWhereInput } from './contract-scalar-where.input';

@InputType()
export class ContractUncheckedUpdateManyWithoutEmployeeInput {

    @Field(() => [ContractCreateWithoutEmployeeInput], {nullable:true})
    create?: Array<ContractCreateWithoutEmployeeInput>;

    @Field(() => [ContractCreateOrConnectWithoutEmployeeInput], {nullable:true})
    connectOrCreate?: Array<ContractCreateOrConnectWithoutEmployeeInput>;

    @Field(() => [ContractUpsertWithWhereUniqueWithoutEmployeeInput], {nullable:true})
    upsert?: Array<ContractUpsertWithWhereUniqueWithoutEmployeeInput>;

    @Field(() => ContractCreateManyEmployeeInputEnvelope, {nullable:true})
    createMany?: ContractCreateManyEmployeeInputEnvelope;

    @Field(() => [ContractWhereUniqueInput], {nullable:true})
    set?: Array<ContractWhereUniqueInput>;

    @Field(() => [ContractWhereUniqueInput], {nullable:true})
    disconnect?: Array<ContractWhereUniqueInput>;

    @Field(() => [ContractWhereUniqueInput], {nullable:true})
    delete?: Array<ContractWhereUniqueInput>;

    @Field(() => [ContractWhereUniqueInput], {nullable:true})
    connect?: Array<ContractWhereUniqueInput>;

    @Field(() => [ContractUpdateWithWhereUniqueWithoutEmployeeInput], {nullable:true})
    update?: Array<ContractUpdateWithWhereUniqueWithoutEmployeeInput>;

    @Field(() => [ContractUpdateManyWithWhereWithoutEmployeeInput], {nullable:true})
    updateMany?: Array<ContractUpdateManyWithWhereWithoutEmployeeInput>;

    @Field(() => [ContractScalarWhereInput], {nullable:true})
    deleteMany?: Array<ContractScalarWhereInput>;
}
