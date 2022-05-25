import { EmployeeCreateWithoutPhonesInput } from './employee-create-without-phones.input';
import { EmployeeCreateOrConnectWithoutPhonesInput } from './employee-create-or-connect-without-phones.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
export declare class EmployeeCreateNestedOneWithoutPhonesInput {
    create?: EmployeeCreateWithoutPhonesInput;
    connectOrCreate?: EmployeeCreateOrConnectWithoutPhonesInput;
    connect?: EmployeeWhereUniqueInput;
}
