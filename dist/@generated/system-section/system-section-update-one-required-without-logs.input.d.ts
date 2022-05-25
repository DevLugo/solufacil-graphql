import { SystemSectionCreateWithoutLogsInput } from './system-section-create-without-logs.input';
import { SystemSectionCreateOrConnectWithoutLogsInput } from './system-section-create-or-connect-without-logs.input';
import { SystemSectionUpsertWithoutLogsInput } from './system-section-upsert-without-logs.input';
import { SystemSectionWhereUniqueInput } from './system-section-where-unique.input';
import { SystemSectionUpdateWithoutLogsInput } from './system-section-update-without-logs.input';
export declare class SystemSectionUpdateOneRequiredWithoutLogsInput {
    create?: SystemSectionCreateWithoutLogsInput;
    connectOrCreate?: SystemSectionCreateOrConnectWithoutLogsInput;
    upsert?: SystemSectionUpsertWithoutLogsInput;
    connect?: SystemSectionWhereUniqueInput;
    update?: SystemSectionUpdateWithoutLogsInput;
}
