import { DocumentUncheckedCreateNestedManyWithoutAvalInput } from '../document/document-unchecked-create-nested-many-without-aval.input';
export declare class AvalUncheckedCreateWithoutPhonesInput {
    id?: string;
    email: string;
    fullName: string;
    firstName: string;
    lastName: string;
    documents?: DocumentUncheckedCreateNestedManyWithoutAvalInput;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
