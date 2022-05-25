import { EmployeeCreateWithoutExpensesInput } from './employee-create-without-expenses.input';
import { EmployeeCreateOrConnectWithoutExpensesInput } from './employee-create-or-connect-without-expenses.input';
import { EmployeeUpsertWithoutExpensesInput } from './employee-upsert-without-expenses.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithoutExpensesInput } from './employee-update-without-expenses.input';
export declare class EmployeeUpdateOneRequiredWithoutExpensesInput {
    create?: EmployeeCreateWithoutExpensesInput;
    connectOrCreate?: EmployeeCreateOrConnectWithoutExpensesInput;
    upsert?: EmployeeUpsertWithoutExpensesInput;
    connect?: EmployeeWhereUniqueInput;
    update?: EmployeeUpdateWithoutExpensesInput;
}
