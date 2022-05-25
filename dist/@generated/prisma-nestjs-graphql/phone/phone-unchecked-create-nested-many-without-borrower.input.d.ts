import { PhoneCreateWithoutBorrowerInput } from './phone-create-without-borrower.input';
import { PhoneCreateOrConnectWithoutBorrowerInput } from './phone-create-or-connect-without-borrower.input';
import { PhoneCreateManyBorrowerInputEnvelope } from './phone-create-many-borrower-input-envelope.input';
import { PhoneWhereUniqueInput } from './phone-where-unique.input';
export declare class PhoneUncheckedCreateNestedManyWithoutBorrowerInput {
    create?: Array<PhoneCreateWithoutBorrowerInput>;
    connectOrCreate?: Array<PhoneCreateOrConnectWithoutBorrowerInput>;
    createMany?: PhoneCreateManyBorrowerInputEnvelope;
    connect?: Array<PhoneWhereUniqueInput>;
}
