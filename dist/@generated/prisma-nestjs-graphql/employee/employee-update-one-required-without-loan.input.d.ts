import { EmployeeCreateWithoutLoanInput } from './employee-create-without-loan.input';
import { EmployeeCreateOrConnectWithoutLoanInput } from './employee-create-or-connect-without-loan.input';
import { EmployeeUpsertWithoutLoanInput } from './employee-upsert-without-loan.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithoutLoanInput } from './employee-update-without-loan.input';
export declare class EmployeeUpdateOneRequiredWithoutLoanInput {
    create?: EmployeeCreateWithoutLoanInput;
    connectOrCreate?: EmployeeCreateOrConnectWithoutLoanInput;
    upsert?: EmployeeUpsertWithoutLoanInput;
    connect?: EmployeeWhereUniqueInput;
    update?: EmployeeUpdateWithoutLoanInput;
}
