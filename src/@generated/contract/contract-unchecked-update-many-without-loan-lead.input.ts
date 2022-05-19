import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContractCreateWithoutLoanLeadInput } from './contract-create-without-loan-lead.input';
import { ContractCreateOrConnectWithoutLoanLeadInput } from './contract-create-or-connect-without-loan-lead.input';
import { ContractUpsertWithWhereUniqueWithoutLoanLeadInput } from './contract-upsert-with-where-unique-without-loan-lead.input';
import { ContractCreateManyLoanLeadInputEnvelope } from './contract-create-many-loan-lead-input-envelope.input';
import { ContractWhereUniqueInput } from './contract-where-unique.input';
import { ContractUpdateWithWhereUniqueWithoutLoanLeadInput } from './contract-update-with-where-unique-without-loan-lead.input';
import { ContractUpdateManyWithWhereWithoutLoanLeadInput } from './contract-update-many-with-where-without-loan-lead.input';
import { ContractScalarWhereInput } from './contract-scalar-where.input';

@InputType()
export class ContractUncheckedUpdateManyWithoutLoanLeadInput {

    @Field(() => [ContractCreateWithoutLoanLeadInput], {nullable:true})
    create?: Array<ContractCreateWithoutLoanLeadInput>;

    @Field(() => [ContractCreateOrConnectWithoutLoanLeadInput], {nullable:true})
    connectOrCreate?: Array<ContractCreateOrConnectWithoutLoanLeadInput>;

    @Field(() => [ContractUpsertWithWhereUniqueWithoutLoanLeadInput], {nullable:true})
    upsert?: Array<ContractUpsertWithWhereUniqueWithoutLoanLeadInput>;

    @Field(() => ContractCreateManyLoanLeadInputEnvelope, {nullable:true})
    createMany?: ContractCreateManyLoanLeadInputEnvelope;

    @Field(() => [ContractWhereUniqueInput], {nullable:true})
    set?: Array<ContractWhereUniqueInput>;

    @Field(() => [ContractWhereUniqueInput], {nullable:true})
    disconnect?: Array<ContractWhereUniqueInput>;

    @Field(() => [ContractWhereUniqueInput], {nullable:true})
    delete?: Array<ContractWhereUniqueInput>;

    @Field(() => [ContractWhereUniqueInput], {nullable:true})
    connect?: Array<ContractWhereUniqueInput>;

    @Field(() => [ContractUpdateWithWhereUniqueWithoutLoanLeadInput], {nullable:true})
    update?: Array<ContractUpdateWithWhereUniqueWithoutLoanLeadInput>;

    @Field(() => [ContractUpdateManyWithWhereWithoutLoanLeadInput], {nullable:true})
    updateMany?: Array<ContractUpdateManyWithWhereWithoutLoanLeadInput>;

    @Field(() => [ContractScalarWhereInput], {nullable:true})
    deleteMany?: Array<ContractScalarWhereInput>;
}
