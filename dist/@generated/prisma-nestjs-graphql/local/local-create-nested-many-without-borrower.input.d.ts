import { LocalCreateWithoutBorrowerInput } from './local-create-without-borrower.input';
import { LocalCreateOrConnectWithoutBorrowerInput } from './local-create-or-connect-without-borrower.input';
import { LocalCreateManyBorrowerInputEnvelope } from './local-create-many-borrower-input-envelope.input';
import { LocalWhereUniqueInput } from './local-where-unique.input';
export declare class LocalCreateNestedManyWithoutBorrowerInput {
    create?: Array<LocalCreateWithoutBorrowerInput>;
    connectOrCreate?: Array<LocalCreateOrConnectWithoutBorrowerInput>;
    createMany?: LocalCreateManyBorrowerInputEnvelope;
    connect?: Array<LocalWhereUniqueInput>;
}
