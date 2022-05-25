import { PhoneUncheckedCreateNestedManyWithoutAvalInput } from '../phone/phone-unchecked-create-nested-many-without-aval.input';
import { DocumentUncheckedCreateNestedManyWithoutAvalInput } from '../document/document-unchecked-create-nested-many-without-aval.input';
export declare class AvalUncheckedCreateInput {
    id?: string;
    phones?: PhoneUncheckedCreateNestedManyWithoutAvalInput;
    email: string;
    fullName: string;
    firstName: string;
    lastName: string;
    documents?: DocumentUncheckedCreateNestedManyWithoutAvalInput;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
