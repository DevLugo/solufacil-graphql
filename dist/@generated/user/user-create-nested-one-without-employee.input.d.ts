import { UserCreateWithoutEmployeeInput } from './user-create-without-employee.input';
import { UserCreateOrConnectWithoutEmployeeInput } from './user-create-or-connect-without-employee.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
export declare class UserCreateNestedOneWithoutEmployeeInput {
    create?: UserCreateWithoutEmployeeInput;
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeInput;
    connect?: UserWhereUniqueInput;
}
