import { SystemSectionCreateWithoutLogsInput } from './system-section-create-without-logs.input';
import { SystemSectionCreateOrConnectWithoutLogsInput } from './system-section-create-or-connect-without-logs.input';
import { SystemSectionWhereUniqueInput } from './system-section-where-unique.input';
export declare class SystemSectionCreateNestedOneWithoutLogsInput {
    create?: SystemSectionCreateWithoutLogsInput;
    connectOrCreate?: SystemSectionCreateOrConnectWithoutLogsInput;
    connect?: SystemSectionWhereUniqueInput;
}
