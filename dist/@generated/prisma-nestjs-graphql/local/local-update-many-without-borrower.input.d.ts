import { LocalCreateWithoutBorrowerInput } from './local-create-without-borrower.input';
import { LocalCreateOrConnectWithoutBorrowerInput } from './local-create-or-connect-without-borrower.input';
import { LocalUpsertWithWhereUniqueWithoutBorrowerInput } from './local-upsert-with-where-unique-without-borrower.input';
import { LocalCreateManyBorrowerInputEnvelope } from './local-create-many-borrower-input-envelope.input';
import { LocalWhereUniqueInput } from './local-where-unique.input';
import { LocalUpdateWithWhereUniqueWithoutBorrowerInput } from './local-update-with-where-unique-without-borrower.input';
import { LocalUpdateManyWithWhereWithoutBorrowerInput } from './local-update-many-with-where-without-borrower.input';
import { LocalScalarWhereInput } from './local-scalar-where.input';
export declare class LocalUpdateManyWithoutBorrowerInput {
    create?: Array<LocalCreateWithoutBorrowerInput>;
    connectOrCreate?: Array<LocalCreateOrConnectWithoutBorrowerInput>;
    upsert?: Array<LocalUpsertWithWhereUniqueWithoutBorrowerInput>;
    createMany?: LocalCreateManyBorrowerInputEnvelope;
    set?: Array<LocalWhereUniqueInput>;
    disconnect?: Array<LocalWhereUniqueInput>;
    delete?: Array<LocalWhereUniqueInput>;
    connect?: Array<LocalWhereUniqueInput>;
    update?: Array<LocalUpdateWithWhereUniqueWithoutBorrowerInput>;
    updateMany?: Array<LocalUpdateManyWithWhereWithoutBorrowerInput>;
    deleteMany?: Array<LocalScalarWhereInput>;
}
