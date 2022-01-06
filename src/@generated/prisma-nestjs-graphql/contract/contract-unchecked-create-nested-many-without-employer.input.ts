import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContractCreateWithoutEmployerInput } from './contract-create-without-employer.input';
import { ContractCreateOrConnectWithoutEmployerInput } from './contract-create-or-connect-without-employer.input';
import { ContractCreateManyEmployerInputEnvelope } from './contract-create-many-employer-input-envelope.input';
import { ContractWhereUniqueInput } from './contract-where-unique.input';

@InputType()
export class ContractUncheckedCreateNestedManyWithoutEmployerInput {

    @Field(() => [ContractCreateWithoutEmployerInput], {nullable:true})
    create?: Array<ContractCreateWithoutEmployerInput>;

    @Field(() => [ContractCreateOrConnectWithoutEmployerInput], {nullable:true})
    connectOrCreate?: Array<ContractCreateOrConnectWithoutEmployerInput>;

    @Field(() => ContractCreateManyEmployerInputEnvelope, {nullable:true})
    createMany?: ContractCreateManyEmployerInputEnvelope;

    @Field(() => [ContractWhereUniqueInput], {nullable:true})
    connect?: Array<ContractWhereUniqueInput>;
}
