import { BorrowerCreateNestedOneWithoutLocalInput } from '../borrower/borrower-create-nested-one-without-local.input';
export declare class LocalCreateInput {
    id?: string;
    name: string;
    address: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    borrower: BorrowerCreateNestedOneWithoutLocalInput;
}
