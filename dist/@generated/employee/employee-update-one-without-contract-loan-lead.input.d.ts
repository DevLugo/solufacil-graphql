import { EmployeeCreateWithoutContractLoanLeadInput } from './employee-create-without-contract-loan-lead.input';
import { EmployeeCreateOrConnectWithoutContractLoanLeadInput } from './employee-create-or-connect-without-contract-loan-lead.input';
import { EmployeeUpsertWithoutContractLoanLeadInput } from './employee-upsert-without-contract-loan-lead.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithoutContractLoanLeadInput } from './employee-update-without-contract-loan-lead.input';
export declare class EmployeeUpdateOneWithoutContractLoanLeadInput {
    create?: EmployeeCreateWithoutContractLoanLeadInput;
    connectOrCreate?: EmployeeCreateOrConnectWithoutContractLoanLeadInput;
    upsert?: EmployeeUpsertWithoutContractLoanLeadInput;
    disconnect?: boolean;
    delete?: boolean;
    connect?: EmployeeWhereUniqueInput;
    update?: EmployeeUpdateWithoutContractLoanLeadInput;
}
