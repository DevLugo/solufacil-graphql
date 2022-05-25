import { EmployeeCreateWithoutContractEmployeeInput } from './employee-create-without-contract-employee.input';
import { EmployeeCreateOrConnectWithoutContractEmployeeInput } from './employee-create-or-connect-without-contract-employee.input';
import { EmployeeUpsertWithoutContractEmployeeInput } from './employee-upsert-without-contract-employee.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithoutContractEmployeeInput } from './employee-update-without-contract-employee.input';
export declare class EmployeeUpdateOneRequiredWithoutContractEmployeeInput {
    create?: EmployeeCreateWithoutContractEmployeeInput;
    connectOrCreate?: EmployeeCreateOrConnectWithoutContractEmployeeInput;
    upsert?: EmployeeUpsertWithoutContractEmployeeInput;
    connect?: EmployeeWhereUniqueInput;
    update?: EmployeeUpdateWithoutContractEmployeeInput;
}
