import { PhoneCreateNestedManyWithoutBorrowerInput } from '../phone/phone-create-nested-many-without-borrower.input';
import { DocumentCreateNestedManyWithoutBorrowerInput } from '../document/document-create-nested-many-without-borrower.input';
import { ContractCreateNestedManyWithoutBorrowerInput } from '../contract/contract-create-nested-many-without-borrower.input';
export declare class BorrowerCreateWithoutLocalInput {
    id?: string;
    name: string;
    address: string;
    email?: string;
    phones?: PhoneCreateNestedManyWithoutBorrowerInput;
    documents?: DocumentCreateNestedManyWithoutBorrowerInput;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Contract?: ContractCreateNestedManyWithoutBorrowerInput;
}
