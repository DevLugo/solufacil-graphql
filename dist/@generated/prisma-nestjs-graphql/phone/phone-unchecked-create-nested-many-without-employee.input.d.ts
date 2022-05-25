import { PhoneCreateWithoutEmployeeInput } from './phone-create-without-employee.input';
import { PhoneCreateOrConnectWithoutEmployeeInput } from './phone-create-or-connect-without-employee.input';
import { PhoneCreateManyEmployeeInputEnvelope } from './phone-create-many-employee-input-envelope.input';
import { PhoneWhereUniqueInput } from './phone-where-unique.input';
export declare class PhoneUncheckedCreateNestedManyWithoutEmployeeInput {
    create?: Array<PhoneCreateWithoutEmployeeInput>;
    connectOrCreate?: Array<PhoneCreateOrConnectWithoutEmployeeInput>;
    createMany?: PhoneCreateManyEmployeeInputEnvelope;
    connect?: Array<PhoneWhereUniqueInput>;
}
