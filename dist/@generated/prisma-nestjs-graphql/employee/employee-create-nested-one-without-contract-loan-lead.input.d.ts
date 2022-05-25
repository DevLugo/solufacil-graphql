import { EmployeeCreateWithoutContractLoanLeadInput } from './employee-create-without-contract-loan-lead.input';
import { EmployeeCreateOrConnectWithoutContractLoanLeadInput } from './employee-create-or-connect-without-contract-loan-lead.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
export declare class EmployeeCreateNestedOneWithoutContractLoanLeadInput {
    create?: EmployeeCreateWithoutContractLoanLeadInput;
    connectOrCreate?: EmployeeCreateOrConnectWithoutContractLoanLeadInput;
    connect?: EmployeeWhereUniqueInput;
}
