import { LogCreateWithoutSectionInput } from './log-create-without-section.input';
import { LogCreateOrConnectWithoutSectionInput } from './log-create-or-connect-without-section.input';
import { LogUpsertWithWhereUniqueWithoutSectionInput } from './log-upsert-with-where-unique-without-section.input';
import { LogCreateManySectionInputEnvelope } from './log-create-many-section-input-envelope.input';
import { LogWhereUniqueInput } from './log-where-unique.input';
import { LogUpdateWithWhereUniqueWithoutSectionInput } from './log-update-with-where-unique-without-section.input';
import { LogUpdateManyWithWhereWithoutSectionInput } from './log-update-many-with-where-without-section.input';
import { LogScalarWhereInput } from './log-scalar-where.input';
export declare class LogUpdateManyWithoutSectionInput {
    create?: Array<LogCreateWithoutSectionInput>;
    connectOrCreate?: Array<LogCreateOrConnectWithoutSectionInput>;
    upsert?: Array<LogUpsertWithWhereUniqueWithoutSectionInput>;
    createMany?: LogCreateManySectionInputEnvelope;
    set?: Array<LogWhereUniqueInput>;
    disconnect?: Array<LogWhereUniqueInput>;
    delete?: Array<LogWhereUniqueInput>;
    connect?: Array<LogWhereUniqueInput>;
    update?: Array<LogUpdateWithWhereUniqueWithoutSectionInput>;
    updateMany?: Array<LogUpdateManyWithWhereWithoutSectionInput>;
    deleteMany?: Array<LogScalarWhereInput>;
}
