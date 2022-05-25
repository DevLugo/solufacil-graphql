import { LoanUncheckedCreateNestedManyWithoutContractInput } from '../loan/loan-unchecked-create-nested-many-without-contract.input';
export declare class ContractUncheckedCreateWithoutDocumentsInput {
    id?: string;
    borrowerId: string;
    loans?: LoanUncheckedCreateNestedManyWithoutContractInput;
    createdAt?: Date | string;
    dueDate: Date | string;
    signDate: Date | string;
    updatedAt?: Date | string;
    contractTypeId: string;
    loanLeadId: string;
    employeeId: string;
}
