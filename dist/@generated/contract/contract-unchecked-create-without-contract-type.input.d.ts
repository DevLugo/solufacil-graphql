import { DocumentUncheckedCreateNestedManyWithoutContractInput } from '../document/document-unchecked-create-nested-many-without-contract.input';
import { LoanUncheckedCreateNestedManyWithoutContractInput } from '../loan/loan-unchecked-create-nested-many-without-contract.input';
export declare class ContractUncheckedCreateWithoutContractTypeInput {
    id?: string;
    borrowerId: string;
    documents?: DocumentUncheckedCreateNestedManyWithoutContractInput;
    loans?: LoanUncheckedCreateNestedManyWithoutContractInput;
    createdAt?: Date | string;
    dueDate: Date | string;
    signDate: Date | string;
    updatedAt?: Date | string;
    loanLeadId: string;
    employeeId: string;
}
