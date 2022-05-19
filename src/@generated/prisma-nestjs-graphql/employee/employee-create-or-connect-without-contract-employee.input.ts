import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeCreateWithoutContractEmployeeInput } from './employee-create-without-contract-employee.input';

@InputType()
export class EmployeeCreateOrConnectWithoutContractEmployeeInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: EmployeeWhereUniqueInput;

    @Field(() => EmployeeCreateWithoutContractEmployeeInput, {nullable:false})
    create!: EmployeeCreateWithoutContractEmployeeInput;
}
