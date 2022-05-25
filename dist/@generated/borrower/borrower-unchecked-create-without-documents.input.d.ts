import { PhoneUncheckedCreateNestedManyWithoutBorrowerInput } from '../phone/phone-unchecked-create-nested-many-without-borrower.input';
import { ContractUncheckedCreateNestedManyWithoutBorrowerInput } from '../contract/contract-unchecked-create-nested-many-without-borrower.input';
import { LocalUncheckedCreateNestedManyWithoutBorrowerInput } from '../local/local-unchecked-create-nested-many-without-borrower.input';
export declare class BorrowerUncheckedCreateWithoutDocumentsInput {
    id?: string;
    name: string;
    address: string;
    email?: string;
    phones?: PhoneUncheckedCreateNestedManyWithoutBorrowerInput;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Contract?: ContractUncheckedCreateNestedManyWithoutBorrowerInput;
    Local?: LocalUncheckedCreateNestedManyWithoutBorrowerInput;
}
