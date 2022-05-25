import { BorrowerCreateNestedOneWithoutPhonesInput } from '../borrower/borrower-create-nested-one-without-phones.input';
import { EmployeeCreateNestedOneWithoutPhonesInput } from '../employee/employee-create-nested-one-without-phones.input';
export declare class PhoneCreateWithoutAvalInput {
    id?: string;
    number: string;
    Borrower?: BorrowerCreateNestedOneWithoutPhonesInput;
    Employee?: EmployeeCreateNestedOneWithoutPhonesInput;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
