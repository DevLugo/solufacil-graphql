import { DocumentUncheckedCreateNestedManyWithoutBorrowerInput } from '../document/document-unchecked-create-nested-many-without-borrower.input';
import { ContractUncheckedCreateNestedManyWithoutBorrowerInput } from '../contract/contract-unchecked-create-nested-many-without-borrower.input';
import { LocalUncheckedCreateNestedManyWithoutBorrowerInput } from '../local/local-unchecked-create-nested-many-without-borrower.input';
export declare class BorrowerUncheckedCreateWithoutPhonesInput {
    id?: string;
    name: string;
    address: string;
    email?: string;
    documents?: DocumentUncheckedCreateNestedManyWithoutBorrowerInput;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Contract?: ContractUncheckedCreateNestedManyWithoutBorrowerInput;
    Local?: LocalUncheckedCreateNestedManyWithoutBorrowerInput;
}
