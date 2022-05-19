import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeUpdateWithoutExpensesInput } from './employee-update-without-expenses.input';
import { EmployeeCreateWithoutExpensesInput } from './employee-create-without-expenses.input';

@InputType()
export class EmployeeUpsertWithoutExpensesInput {

    @Field(() => EmployeeUpdateWithoutExpensesInput, {nullable:false})
    update!: EmployeeUpdateWithoutExpensesInput;

    @Field(() => EmployeeCreateWithoutExpensesInput, {nullable:false})
    create!: EmployeeCreateWithoutExpensesInput;
}
