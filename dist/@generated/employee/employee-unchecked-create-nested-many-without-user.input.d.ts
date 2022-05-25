import { EmployeeCreateWithoutUserInput } from './employee-create-without-user.input';
import { EmployeeCreateOrConnectWithoutUserInput } from './employee-create-or-connect-without-user.input';
import { EmployeeCreateManyUserInputEnvelope } from './employee-create-many-user-input-envelope.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
export declare class EmployeeUncheckedCreateNestedManyWithoutUserInput {
    create?: Array<EmployeeCreateWithoutUserInput>;
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutUserInput>;
    createMany?: EmployeeCreateManyUserInputEnvelope;
    connect?: Array<EmployeeWhereUniqueInput>;
}
