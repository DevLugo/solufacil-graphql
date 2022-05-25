import { DocumentCreateNestedManyWithoutAvalInput } from '../document/document-create-nested-many-without-aval.input';
export declare class AvalCreateWithoutPhonesInput {
    id?: string;
    email: string;
    fullName: string;
    firstName: string;
    lastName: string;
    documents?: DocumentCreateNestedManyWithoutAvalInput;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
