import { LogCountAggregate } from './log-count-aggregate.output';
import { LogMinAggregate } from './log-min-aggregate.output';
import { LogMaxAggregate } from './log-max-aggregate.output';
export declare class LogGroupBy {
    id: string;
    requestBody: string;
    requestType: string;
    deviceType: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    systemSectionId: string;
    _count?: LogCountAggregate;
    _min?: LogMinAggregate;
    _max?: LogMaxAggregate;
}
