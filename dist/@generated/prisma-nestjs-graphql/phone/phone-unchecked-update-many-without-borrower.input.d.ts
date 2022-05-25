import { PhoneCreateWithoutBorrowerInput } from './phone-create-without-borrower.input';
import { PhoneCreateOrConnectWithoutBorrowerInput } from './phone-create-or-connect-without-borrower.input';
import { PhoneUpsertWithWhereUniqueWithoutBorrowerInput } from './phone-upsert-with-where-unique-without-borrower.input';
import { PhoneCreateManyBorrowerInputEnvelope } from './phone-create-many-borrower-input-envelope.input';
import { PhoneWhereUniqueInput } from './phone-where-unique.input';
import { PhoneUpdateWithWhereUniqueWithoutBorrowerInput } from './phone-update-with-where-unique-without-borrower.input';
import { PhoneUpdateManyWithWhereWithoutBorrowerInput } from './phone-update-many-with-where-without-borrower.input';
import { PhoneScalarWhereInput } from './phone-scalar-where.input';
export declare class PhoneUncheckedUpdateManyWithoutBorrowerInput {
    create?: Array<PhoneCreateWithoutBorrowerInput>;
    connectOrCreate?: Array<PhoneCreateOrConnectWithoutBorrowerInput>;
    upsert?: Array<PhoneUpsertWithWhereUniqueWithoutBorrowerInput>;
    createMany?: PhoneCreateManyBorrowerInputEnvelope;
    set?: Array<PhoneWhereUniqueInput>;
    disconnect?: Array<PhoneWhereUniqueInput>;
    delete?: Array<PhoneWhereUniqueInput>;
    connect?: Array<PhoneWhereUniqueInput>;
    update?: Array<PhoneUpdateWithWhereUniqueWithoutBorrowerInput>;
    updateMany?: Array<PhoneUpdateManyWithWhereWithoutBorrowerInput>;
    deleteMany?: Array<PhoneScalarWhereInput>;
}
