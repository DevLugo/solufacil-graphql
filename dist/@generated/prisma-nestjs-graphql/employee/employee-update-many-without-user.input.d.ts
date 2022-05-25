import { EmployeeCreateWithoutUserInput } from './employee-create-without-user.input';
import { EmployeeCreateOrConnectWithoutUserInput } from './employee-create-or-connect-without-user.input';
import { EmployeeUpsertWithWhereUniqueWithoutUserInput } from './employee-upsert-with-where-unique-without-user.input';
import { EmployeeCreateManyUserInputEnvelope } from './employee-create-many-user-input-envelope.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithWhereUniqueWithoutUserInput } from './employee-update-with-where-unique-without-user.input';
import { EmployeeUpdateManyWithWhereWithoutUserInput } from './employee-update-many-with-where-without-user.input';
import { EmployeeScalarWhereInput } from './employee-scalar-where.input';
export declare class EmployeeUpdateManyWithoutUserInput {
    create?: Array<EmployeeCreateWithoutUserInput>;
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutUserInput>;
    upsert?: Array<EmployeeUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: EmployeeCreateManyUserInputEnvelope;
    set?: Array<EmployeeWhereUniqueInput>;
    disconnect?: Array<EmployeeWhereUniqueInput>;
    delete?: Array<EmployeeWhereUniqueInput>;
    connect?: Array<EmployeeWhereUniqueInput>;
    update?: Array<EmployeeUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<EmployeeUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<EmployeeScalarWhereInput>;
}
