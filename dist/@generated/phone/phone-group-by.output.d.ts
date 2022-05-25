import { PhoneCountAggregate } from './phone-count-aggregate.output';
import { PhoneMinAggregate } from './phone-min-aggregate.output';
import { PhoneMaxAggregate } from './phone-max-aggregate.output';
export declare class PhoneGroupBy {
    id: string;
    number: string;
    borrowerId?: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    avalId?: string;
    employeeId?: string;
    _count?: PhoneCountAggregate;
    _min?: PhoneMinAggregate;
    _max?: PhoneMaxAggregate;
}
