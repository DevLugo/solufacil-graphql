import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContractCreateWithoutBorrowerInput } from './contract-create-without-borrower.input';
import { ContractCreateOrConnectWithoutBorrowerInput } from './contract-create-or-connect-without-borrower.input';
import { ContractUpsertWithWhereUniqueWithoutBorrowerInput } from './contract-upsert-with-where-unique-without-borrower.input';
import { ContractCreateManyBorrowerInputEnvelope } from './contract-create-many-borrower-input-envelope.input';
import { ContractWhereUniqueInput } from './contract-where-unique.input';
import { ContractUpdateWithWhereUniqueWithoutBorrowerInput } from './contract-update-with-where-unique-without-borrower.input';
import { ContractUpdateManyWithWhereWithoutBorrowerInput } from './contract-update-many-with-where-without-borrower.input';
import { ContractScalarWhereInput } from './contract-scalar-where.input';

@InputType()
export class ContractUncheckedUpdateManyWithoutBorrowerInput {

    @Field(() => [ContractCreateWithoutBorrowerInput], {nullable:true})
    create?: Array<ContractCreateWithoutBorrowerInput>;

    @Field(() => [ContractCreateOrConnectWithoutBorrowerInput], {nullable:true})
    connectOrCreate?: Array<ContractCreateOrConnectWithoutBorrowerInput>;

    @Field(() => [ContractUpsertWithWhereUniqueWithoutBorrowerInput], {nullable:true})
    upsert?: Array<ContractUpsertWithWhereUniqueWithoutBorrowerInput>;

    @Field(() => ContractCreateManyBorrowerInputEnvelope, {nullable:true})
    createMany?: ContractCreateManyBorrowerInputEnvelope;

    @Field(() => [ContractWhereUniqueInput], {nullable:true})
    set?: Array<ContractWhereUniqueInput>;

    @Field(() => [ContractWhereUniqueInput], {nullable:true})
    disconnect?: Array<ContractWhereUniqueInput>;

    @Field(() => [ContractWhereUniqueInput], {nullable:true})
    delete?: Array<ContractWhereUniqueInput>;

    @Field(() => [ContractWhereUniqueInput], {nullable:true})
    connect?: Array<ContractWhereUniqueInput>;

    @Field(() => [ContractUpdateWithWhereUniqueWithoutBorrowerInput], {nullable:true})
    update?: Array<ContractUpdateWithWhereUniqueWithoutBorrowerInput>;

    @Field(() => [ContractUpdateManyWithWhereWithoutBorrowerInput], {nullable:true})
    updateMany?: Array<ContractUpdateManyWithWhereWithoutBorrowerInput>;

    @Field(() => [ContractScalarWhereInput], {nullable:true})
    deleteMany?: Array<ContractScalarWhereInput>;
}
