import { UserCreateWithoutEmployeeInput } from './user-create-without-employee.input';
import { UserCreateOrConnectWithoutEmployeeInput } from './user-create-or-connect-without-employee.input';
import { UserUpsertWithoutEmployeeInput } from './user-upsert-without-employee.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutEmployeeInput } from './user-update-without-employee.input';
export declare class UserUpdateOneRequiredWithoutEmployeeInput {
    create?: UserCreateWithoutEmployeeInput;
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeInput;
    upsert?: UserUpsertWithoutEmployeeInput;
    connect?: UserWhereUniqueInput;
    update?: UserUpdateWithoutEmployeeInput;
}
