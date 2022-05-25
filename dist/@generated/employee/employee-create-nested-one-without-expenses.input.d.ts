import { EmployeeCreateWithoutExpensesInput } from './employee-create-without-expenses.input';
import { EmployeeCreateOrConnectWithoutExpensesInput } from './employee-create-or-connect-without-expenses.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
export declare class EmployeeCreateNestedOneWithoutExpensesInput {
    create?: EmployeeCreateWithoutExpensesInput;
    connectOrCreate?: EmployeeCreateOrConnectWithoutExpensesInput;
    connect?: EmployeeWhereUniqueInput;
}
