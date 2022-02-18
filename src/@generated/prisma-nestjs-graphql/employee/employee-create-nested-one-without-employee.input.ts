import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutEmployeeInput } from './employee-create-without-employee.input';
import { EmployeeCreateOrConnectWithoutEmployeeInput } from './employee-create-or-connect-without-employee.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';

@InputType()
export class EmployeeCreateNestedOneWithoutEmployeeInput {

    @Field(() => EmployeeCreateWithoutEmployeeInput, {nullable:true})
    create?: EmployeeCreateWithoutEmployeeInput;

    @Field(() => EmployeeCreateOrConnectWithoutEmployeeInput, {nullable:true})
    connectOrCreate?: EmployeeCreateOrConnectWithoutEmployeeInput;

    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    connect?: EmployeeWhereUniqueInput;
}
