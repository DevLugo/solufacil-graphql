import { PhoneCreateWithoutAvalInput } from './phone-create-without-aval.input';
import { PhoneCreateOrConnectWithoutAvalInput } from './phone-create-or-connect-without-aval.input';
import { PhoneUpsertWithWhereUniqueWithoutAvalInput } from './phone-upsert-with-where-unique-without-aval.input';
import { PhoneCreateManyAvalInputEnvelope } from './phone-create-many-aval-input-envelope.input';
import { PhoneWhereUniqueInput } from './phone-where-unique.input';
import { PhoneUpdateWithWhereUniqueWithoutAvalInput } from './phone-update-with-where-unique-without-aval.input';
import { PhoneUpdateManyWithWhereWithoutAvalInput } from './phone-update-many-with-where-without-aval.input';
import { PhoneScalarWhereInput } from './phone-scalar-where.input';
export declare class PhoneUpdateManyWithoutAvalInput {
    create?: Array<PhoneCreateWithoutAvalInput>;
    connectOrCreate?: Array<PhoneCreateOrConnectWithoutAvalInput>;
    upsert?: Array<PhoneUpsertWithWhereUniqueWithoutAvalInput>;
    createMany?: PhoneCreateManyAvalInputEnvelope;
    set?: Array<PhoneWhereUniqueInput>;
    disconnect?: Array<PhoneWhereUniqueInput>;
    delete?: Array<PhoneWhereUniqueInput>;
    connect?: Array<PhoneWhereUniqueInput>;
    update?: Array<PhoneUpdateWithWhereUniqueWithoutAvalInput>;
    updateMany?: Array<PhoneUpdateManyWithWhereWithoutAvalInput>;
    deleteMany?: Array<PhoneScalarWhereInput>;
}
