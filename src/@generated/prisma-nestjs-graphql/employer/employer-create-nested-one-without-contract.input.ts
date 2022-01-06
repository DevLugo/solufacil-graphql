import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployerCreateWithoutContractInput } from './employer-create-without-contract.input';
import { EmployerCreateOrConnectWithoutContractInput } from './employer-create-or-connect-without-contract.input';
import { EmployerWhereUniqueInput } from './employer-where-unique.input';

@InputType()
export class EmployerCreateNestedOneWithoutContractInput {

    @Field(() => EmployerCreateWithoutContractInput, {nullable:true})
    create?: EmployerCreateWithoutContractInput;

    @Field(() => EmployerCreateOrConnectWithoutContractInput, {nullable:true})
    connectOrCreate?: EmployerCreateOrConnectWithoutContractInput;

    @Field(() => EmployerWhereUniqueInput, {nullable:true})
    connect?: EmployerWhereUniqueInput;
}
