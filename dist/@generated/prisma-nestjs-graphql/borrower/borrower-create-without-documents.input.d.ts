import { PhoneCreateNestedManyWithoutBorrowerInput } from '../phone/phone-create-nested-many-without-borrower.input';
import { ContractCreateNestedManyWithoutBorrowerInput } from '../contract/contract-create-nested-many-without-borrower.input';
import { LocalCreateNestedManyWithoutBorrowerInput } from '../local/local-create-nested-many-without-borrower.input';
export declare class BorrowerCreateWithoutDocumentsInput {
    id?: string;
    name: string;
    address: string;
    email?: string;
    phones?: PhoneCreateNestedManyWithoutBorrowerInput;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Contract?: ContractCreateNestedManyWithoutBorrowerInput;
    Local?: LocalCreateNestedManyWithoutBorrowerInput;
}
