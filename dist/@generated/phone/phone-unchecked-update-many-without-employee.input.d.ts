import { PhoneCreateWithoutEmployeeInput } from './phone-create-without-employee.input';
import { PhoneCreateOrConnectWithoutEmployeeInput } from './phone-create-or-connect-without-employee.input';
import { PhoneUpsertWithWhereUniqueWithoutEmployeeInput } from './phone-upsert-with-where-unique-without-employee.input';
import { PhoneCreateManyEmployeeInputEnvelope } from './phone-create-many-employee-input-envelope.input';
import { PhoneWhereUniqueInput } from './phone-where-unique.input';
import { PhoneUpdateWithWhereUniqueWithoutEmployeeInput } from './phone-update-with-where-unique-without-employee.input';
import { PhoneUpdateManyWithWhereWithoutEmployeeInput } from './phone-update-many-with-where-without-employee.input';
import { PhoneScalarWhereInput } from './phone-scalar-where.input';
export declare class PhoneUncheckedUpdateManyWithoutEmployeeInput {
    create?: Array<PhoneCreateWithoutEmployeeInput>;
    connectOrCreate?: Array<PhoneCreateOrConnectWithoutEmployeeInput>;
    upsert?: Array<PhoneUpsertWithWhereUniqueWithoutEmployeeInput>;
    createMany?: PhoneCreateManyEmployeeInputEnvelope;
    set?: Array<PhoneWhereUniqueInput>;
    disconnect?: Array<PhoneWhereUniqueInput>;
    delete?: Array<PhoneWhereUniqueInput>;
    connect?: Array<PhoneWhereUniqueInput>;
    update?: Array<PhoneUpdateWithWhereUniqueWithoutEmployeeInput>;
    updateMany?: Array<PhoneUpdateManyWithWhereWithoutEmployeeInput>;
    deleteMany?: Array<PhoneScalarWhereInput>;
}
