import { DocumentUncheckedCreateNestedManyWithoutContractInput } from '../document/document-unchecked-create-nested-many-without-contract.input';
export declare class ContractUncheckedCreateWithoutLoansInput {
    id?: string;
    borrowerId: string;
    documents?: DocumentUncheckedCreateNestedManyWithoutContractInput;
    createdAt?: Date | string;
    dueDate: Date | string;
    signDate: Date | string;
    updatedAt?: Date | string;
    contractTypeId: string;
    loanLeadId: string;
    employeeId: string;
}
