import { SortOrder } from '../prisma/sort-order.enum';
import { ContractOrderByRelationAggregateInput } from '../contract/contract-order-by-relation-aggregate.input';
export declare class ContractTypeOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    monthDuration?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    maxRate?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    contract?: ContractOrderByRelationAggregateInput;
}
