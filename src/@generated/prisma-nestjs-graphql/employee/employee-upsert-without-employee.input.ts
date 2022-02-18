import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeUpdateWithoutEmployeeInput } from './employee-update-without-employee.input';
import { EmployeeCreateWithoutEmployeeInput } from './employee-create-without-employee.input';

@InputType()
export class EmployeeUpsertWithoutEmployeeInput {

    @Field(() => EmployeeUpdateWithoutEmployeeInput, {nullable:false})
    update!: EmployeeUpdateWithoutEmployeeInput;

    @Field(() => EmployeeCreateWithoutEmployeeInput, {nullable:false})
    create!: EmployeeCreateWithoutEmployeeInput;
}
