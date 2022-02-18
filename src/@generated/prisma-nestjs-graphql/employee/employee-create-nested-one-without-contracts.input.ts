import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutContractsInput } from './employee-create-without-contracts.input';
import { EmployeeCreateOrConnectWithoutContractsInput } from './employee-create-or-connect-without-contracts.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';

@InputType()
export class EmployeeCreateNestedOneWithoutContractsInput {

    @Field(() => EmployeeCreateWithoutContractsInput, {nullable:true})
    create?: EmployeeCreateWithoutContractsInput;

    @Field(() => EmployeeCreateOrConnectWithoutContractsInput, {nullable:true})
    connectOrCreate?: EmployeeCreateOrConnectWithoutContractsInput;

    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    connect?: EmployeeWhereUniqueInput;
}
