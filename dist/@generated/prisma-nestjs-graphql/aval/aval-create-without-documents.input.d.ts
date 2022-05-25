import { PhoneCreateNestedManyWithoutAvalInput } from '../phone/phone-create-nested-many-without-aval.input';
export declare class AvalCreateWithoutDocumentsInput {
    id?: string;
    phones?: PhoneCreateNestedManyWithoutAvalInput;
    email: string;
    fullName: string;
    firstName: string;
    lastName: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
