import { DocumentCreateNestedManyWithoutBorrowerInput } from '../document/document-create-nested-many-without-borrower.input';
import { ContractCreateNestedManyWithoutBorrowerInput } from '../contract/contract-create-nested-many-without-borrower.input';
import { LocalCreateNestedManyWithoutBorrowerInput } from '../local/local-create-nested-many-without-borrower.input';
export declare class BorrowerCreateWithoutPhonesInput {
    id?: string;
    name: string;
    address: string;
    email?: string;
    documents?: DocumentCreateNestedManyWithoutBorrowerInput;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Contract?: ContractCreateNestedManyWithoutBorrowerInput;
    Local?: LocalCreateNestedManyWithoutBorrowerInput;
}
