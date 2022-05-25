import { EmployeeCreateNestedOneWithoutPhonesInput } from '../employee/employee-create-nested-one-without-phones.input';
import { AvalCreateNestedOneWithoutPhonesInput } from '../aval/aval-create-nested-one-without-phones.input';
export declare class PhoneCreateWithoutBorrowerInput {
    id?: string;
    number: string;
    Employee?: EmployeeCreateNestedOneWithoutPhonesInput;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    aval?: AvalCreateNestedOneWithoutPhonesInput;
}
