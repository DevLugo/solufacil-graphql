import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutExpensesInput } from './employee-create-without-expenses.input';
import { EmployeeCreateOrConnectWithoutExpensesInput } from './employee-create-or-connect-without-expenses.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';

@InputType()
export class EmployeeCreateNestedOneWithoutExpensesInput {

    @Field(() => EmployeeCreateWithoutExpensesInput, {nullable:true})
    create?: EmployeeCreateWithoutExpensesInput;

    @Field(() => EmployeeCreateOrConnectWithoutExpensesInput, {nullable:true})
    connectOrCreate?: EmployeeCreateOrConnectWithoutExpensesInput;

    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    connect?: EmployeeWhereUniqueInput;
}
