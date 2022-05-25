import { LogCreateWithoutSectionInput } from './log-create-without-section.input';
import { LogCreateOrConnectWithoutSectionInput } from './log-create-or-connect-without-section.input';
import { LogCreateManySectionInputEnvelope } from './log-create-many-section-input-envelope.input';
import { LogWhereUniqueInput } from './log-where-unique.input';
export declare class LogUncheckedCreateNestedManyWithoutSectionInput {
    create?: Array<LogCreateWithoutSectionInput>;
    connectOrCreate?: Array<LogCreateOrConnectWithoutSectionInput>;
    createMany?: LogCreateManySectionInputEnvelope;
    connect?: Array<LogWhereUniqueInput>;
}
