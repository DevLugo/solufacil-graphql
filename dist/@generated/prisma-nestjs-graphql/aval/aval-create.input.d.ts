import { PhoneCreateNestedManyWithoutAvalInput } from '../phone/phone-create-nested-many-without-aval.input';
import { DocumentCreateNestedManyWithoutAvalInput } from '../document/document-create-nested-many-without-aval.input';
export declare class AvalCreateInput {
    id?: string;
    phones?: PhoneCreateNestedManyWithoutAvalInput;
    email: string;
    fullName: string;
    firstName: string;
    lastName: string;
    documents?: DocumentCreateNestedManyWithoutAvalInput;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
