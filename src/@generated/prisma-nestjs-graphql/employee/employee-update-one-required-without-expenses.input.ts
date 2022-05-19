import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutExpensesInput } from './employee-create-without-expenses.input';
import { EmployeeCreateOrConnectWithoutExpensesInput } from './employee-create-or-connect-without-expenses.input';
import { EmployeeUpsertWithoutExpensesInput } from './employee-upsert-without-expenses.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithoutExpensesInput } from './employee-update-without-expenses.input';

@InputType()
export class EmployeeUpdateOneRequiredWithoutExpensesInput {

    @Field(() => EmployeeCreateWithoutExpensesInput, {nullable:true})
    create?: EmployeeCreateWithoutExpensesInput;

    @Field(() => EmployeeCreateOrConnectWithoutExpensesInput, {nullable:true})
    connectOrCreate?: EmployeeCreateOrConnectWithoutExpensesInput;

    @Field(() => EmployeeUpsertWithoutExpensesInput, {nullable:true})
    upsert?: EmployeeUpsertWithoutExpensesInput;

    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    connect?: EmployeeWhereUniqueInput;

    @Field(() => EmployeeUpdateWithoutExpensesInput, {nullable:true})
    update?: EmployeeUpdateWithoutExpensesInput;
}
