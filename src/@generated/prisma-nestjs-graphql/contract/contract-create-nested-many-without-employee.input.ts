import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContractCreateWithoutEmployeeInput } from './contract-create-without-employee.input';
import { ContractCreateOrConnectWithoutEmployeeInput } from './contract-create-or-connect-without-employee.input';
import { ContractCreateManyEmployeeInputEnvelope } from './contract-create-many-employee-input-envelope.input';
import { ContractWhereUniqueInput } from './contract-where-unique.input';

@InputType()
export class ContractCreateNestedManyWithoutEmployeeInput {

    @Field(() => [ContractCreateWithoutEmployeeInput], {nullable:true})
    create?: Array<ContractCreateWithoutEmployeeInput>;

    @Field(() => [ContractCreateOrConnectWithoutEmployeeInput], {nullable:true})
    connectOrCreate?: Array<ContractCreateOrConnectWithoutEmployeeInput>;

    @Field(() => ContractCreateManyEmployeeInputEnvelope, {nullable:true})
    createMany?: ContractCreateManyEmployeeInputEnvelope;

    @Field(() => [ContractWhereUniqueInput], {nullable:true})
    connect?: Array<ContractWhereUniqueInput>;
}
