import { SystemSection } from '../system-section/system-section.model';
export declare class Log {
    id: string;
    section?: SystemSection;
    requestBody: string;
    requestType: string;
    deviceType: string;
    createdAt: Date;
    updatedAt: Date;
    systemSectionId: string;
}
