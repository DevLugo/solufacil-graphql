import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutContractEmployeeInput } from './employee-create-without-contract-employee.input';
import { EmployeeCreateOrConnectWithoutContractEmployeeInput } from './employee-create-or-connect-without-contract-employee.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';

@InputType()
export class EmployeeCreateNestedOneWithoutContractEmployeeInput {

    @Field(() => EmployeeCreateWithoutContractEmployeeInput, {nullable:true})
    create?: EmployeeCreateWithoutContractEmployeeInput;

    @Field(() => EmployeeCreateOrConnectWithoutContractEmployeeInput, {nullable:true})
    connectOrCreate?: EmployeeCreateOrConnectWithoutContractEmployeeInput;

    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    connect?: EmployeeWhereUniqueInput;
}
