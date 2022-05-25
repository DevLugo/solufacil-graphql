import { PhoneUncheckedCreateNestedManyWithoutAvalInput } from '../phone/phone-unchecked-create-nested-many-without-aval.input';
export declare class AvalUncheckedCreateWithoutDocumentsInput {
    id?: string;
    phones?: PhoneUncheckedCreateNestedManyWithoutAvalInput;
    email: string;
    fullName: string;
    firstName: string;
    lastName: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
