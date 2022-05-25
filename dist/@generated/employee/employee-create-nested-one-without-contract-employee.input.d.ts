import { EmployeeCreateWithoutContractEmployeeInput } from './employee-create-without-contract-employee.input';
import { EmployeeCreateOrConnectWithoutContractEmployeeInput } from './employee-create-or-connect-without-contract-employee.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
export declare class EmployeeCreateNestedOneWithoutContractEmployeeInput {
    create?: EmployeeCreateWithoutContractEmployeeInput;
    connectOrCreate?: EmployeeCreateOrConnectWithoutContractEmployeeInput;
    connect?: EmployeeWhereUniqueInput;
}
