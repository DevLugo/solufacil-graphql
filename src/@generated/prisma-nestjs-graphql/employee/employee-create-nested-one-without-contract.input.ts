import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutContractInput } from './employee-create-without-contract.input';
import { EmployeeCreateOrConnectWithoutContractInput } from './employee-create-or-connect-without-contract.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';

@InputType()
export class EmployeeCreateNestedOneWithoutContractInput {

    @Field(() => EmployeeCreateWithoutContractInput, {nullable:true})
    create?: EmployeeCreateWithoutContractInput;

    @Field(() => EmployeeCreateOrConnectWithoutContractInput, {nullable:true})
    connectOrCreate?: EmployeeCreateOrConnectWithoutContractInput;

    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    connect?: EmployeeWhereUniqueInput;
}
