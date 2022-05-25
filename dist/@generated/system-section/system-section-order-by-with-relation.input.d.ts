import { SortOrder } from '../prisma/sort-order.enum';
import { LogOrderByRelationAggregateInput } from '../log/log-order-by-relation-aggregate.input';
export declare class SystemSectionOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    logs?: LogOrderByRelationAggregateInput;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
