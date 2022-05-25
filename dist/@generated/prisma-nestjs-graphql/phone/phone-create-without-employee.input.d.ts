import { BorrowerCreateNestedOneWithoutPhonesInput } from '../borrower/borrower-create-nested-one-without-phones.input';
import { AvalCreateNestedOneWithoutPhonesInput } from '../aval/aval-create-nested-one-without-phones.input';
export declare class PhoneCreateWithoutEmployeeInput {
    id?: string;
    number: string;
    Borrower?: BorrowerCreateNestedOneWithoutPhonesInput;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    aval?: AvalCreateNestedOneWithoutPhonesInput;
}
