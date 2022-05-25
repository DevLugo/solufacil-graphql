import { UserCountAggregate } from './user-count-aggregate.output';
import { UserMinAggregate } from './user-min-aggregate.output';
import { UserMaxAggregate } from './user-max-aggregate.output';
export declare class UserGroupBy {
    id: string;
    email: string;
    fullName: string;
    firstName: string;
    lastName: string;
    password: string;
    lastLogin?: Date | string;
    profilePicture?: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    _count?: UserCountAggregate;
    _min?: UserMinAggregate;
    _max?: UserMaxAggregate;
}
