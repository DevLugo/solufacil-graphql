import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeCreateWithoutEmployeeInput } from './employee-create-without-employee.input';

@InputType()
export class EmployeeCreateOrConnectWithoutEmployeeInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: EmployeeWhereUniqueInput;

    @Field(() => EmployeeCreateWithoutEmployeeInput, {nullable:false})
    create!: EmployeeCreateWithoutEmployeeInput;
}
