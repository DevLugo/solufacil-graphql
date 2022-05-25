import { AvalCountAggregate } from './aval-count-aggregate.output';
import { AvalMinAggregate } from './aval-min-aggregate.output';
import { AvalMaxAggregate } from './aval-max-aggregate.output';
export declare class AvalGroupBy {
    id: string;
    email: string;
    fullName: string;
    firstName: string;
    lastName: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: AvalCountAggregate;
    _min?: AvalMinAggregate;
    _max?: AvalMaxAggregate;
}
