import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeUpdateWithoutContractEmployeeInput } from './employee-update-without-contract-employee.input';
import { EmployeeCreateWithoutContractEmployeeInput } from './employee-create-without-contract-employee.input';

@InputType()
export class EmployeeUpsertWithoutContractEmployeeInput {

    @Field(() => EmployeeUpdateWithoutContractEmployeeInput, {nullable:false})
    update!: EmployeeUpdateWithoutContractEmployeeInput;

    @Field(() => EmployeeCreateWithoutContractEmployeeInput, {nullable:false})
    create!: EmployeeCreateWithoutContractEmployeeInput;
}
