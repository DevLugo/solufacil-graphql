import { PhoneCreateWithoutAvalInput } from './phone-create-without-aval.input';
import { PhoneCreateOrConnectWithoutAvalInput } from './phone-create-or-connect-without-aval.input';
import { PhoneCreateManyAvalInputEnvelope } from './phone-create-many-aval-input-envelope.input';
import { PhoneWhereUniqueInput } from './phone-where-unique.input';
export declare class PhoneCreateNestedManyWithoutAvalInput {
    create?: Array<PhoneCreateWithoutAvalInput>;
    connectOrCreate?: Array<PhoneCreateOrConnectWithoutAvalInput>;
    createMany?: PhoneCreateManyAvalInputEnvelope;
    connect?: Array<PhoneWhereUniqueInput>;
}
