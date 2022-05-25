import { SystemSectionCreateNestedOneWithoutLogsInput } from '../system-section/system-section-create-nested-one-without-logs.input';
export declare class LogCreateInput {
    id?: string;
    section: SystemSectionCreateNestedOneWithoutLogsInput;
    requestBody: string;
    requestType: string;
    deviceType: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
