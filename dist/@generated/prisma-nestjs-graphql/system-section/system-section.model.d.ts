import { Log } from '../log/log.model';
import { SystemSectionCount } from './system-section-count.output';
export declare class SystemSection {
    id: string;
    name: string;
    logs?: Array<Log>;
    createdAt: Date;
    updatedAt: Date;
    _count?: SystemSectionCount;
}
