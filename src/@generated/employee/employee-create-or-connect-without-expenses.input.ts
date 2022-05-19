import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeCreateWithoutExpensesInput } from './employee-create-without-expenses.input';

@InputType()
export class EmployeeCreateOrConnectWithoutExpensesInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: EmployeeWhereUniqueInput;

    @Field(() => EmployeeCreateWithoutExpensesInput, {nullable:false})
    create!: EmployeeCreateWithoutExpensesInput;
}
