import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployerCreateWithoutContractInput } from './employer-create-without-contract.input';
import { EmployerCreateOrConnectWithoutContractInput } from './employer-create-or-connect-without-contract.input';
import { EmployerUpsertWithoutContractInput } from './employer-upsert-without-contract.input';
import { EmployerWhereUniqueInput } from './employer-where-unique.input';
import { EmployerUpdateWithoutContractInput } from './employer-update-without-contract.input';

@InputType()
export class EmployerUpdateOneWithoutContractInput {

    @Field(() => EmployerCreateWithoutContractInput, {nullable:true})
    create?: EmployerCreateWithoutContractInput;

    @Field(() => EmployerCreateOrConnectWithoutContractInput, {nullable:true})
    connectOrCreate?: EmployerCreateOrConnectWithoutContractInput;

    @Field(() => EmployerUpsertWithoutContractInput, {nullable:true})
    upsert?: EmployerUpsertWithoutContractInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => EmployerWhereUniqueInput, {nullable:true})
    connect?: EmployerWhereUniqueInput;

    @Field(() => EmployerUpdateWithoutContractInput, {nullable:true})
    update?: EmployerUpdateWithoutContractInput;
}
