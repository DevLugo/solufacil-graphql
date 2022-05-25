import { BorrowerCreateNestedOneWithoutContractInput } from '../borrower/borrower-create-nested-one-without-contract.input';
import { DocumentCreateNestedManyWithoutContractInput } from '../document/document-create-nested-many-without-contract.input';
import { LoanCreateNestedManyWithoutContractInput } from '../loan/loan-create-nested-many-without-contract.input';
import { ContractTypeCreateNestedOneWithoutContractInput } from '../contract-type/contract-type-create-nested-one-without-contract.input';
import { EmployeeCreateNestedOneWithoutContractEmployeeInput } from '../employee/employee-create-nested-one-without-contract-employee.input';
export declare class ContractCreateWithoutLoanLeadInput {
    id?: string;
    borrower: BorrowerCreateNestedOneWithoutContractInput;
    documents?: DocumentCreateNestedManyWithoutContractInput;
    loans?: LoanCreateNestedManyWithoutContractInput;
    createdAt?: Date | string;
    dueDate: Date | string;
    signDate: Date | string;
    updatedAt?: Date | string;
    contractType: ContractTypeCreateNestedOneWithoutContractInput;
    employee: EmployeeCreateNestedOneWithoutContractEmployeeInput;
}
