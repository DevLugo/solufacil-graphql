import { EmployeeCreateWithoutLoanInput } from './employee-create-without-loan.input';
import { EmployeeCreateOrConnectWithoutLoanInput } from './employee-create-or-connect-without-loan.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
export declare class EmployeeCreateNestedOneWithoutLoanInput {
    create?: EmployeeCreateWithoutLoanInput;
    connectOrCreate?: EmployeeCreateOrConnectWithoutLoanInput;
    connect?: EmployeeWhereUniqueInput;
}
