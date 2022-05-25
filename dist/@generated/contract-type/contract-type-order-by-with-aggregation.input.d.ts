import { SortOrder } from '../prisma/sort-order.enum';
import { ContractTypeCountOrderByAggregateInput } from './contract-type-count-order-by-aggregate.input';
import { ContractTypeAvgOrderByAggregateInput } from './contract-type-avg-order-by-aggregate.input';
import { ContractTypeMaxOrderByAggregateInput } from './contract-type-max-order-by-aggregate.input';
import { ContractTypeMinOrderByAggregateInput } from './contract-type-min-order-by-aggregate.input';
import { ContractTypeSumOrderByAggregateInput } from './contract-type-sum-order-by-aggregate.input';
export declare class ContractTypeOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    monthDuration?: keyof typeof SortOrder;
    amount?: keyof typeof SortOrder;
    maxRate?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: ContractTypeCountOrderByAggregateInput;
    _avg?: ContractTypeAvgOrderByAggregateInput;
    _max?: ContractTypeMaxOrderByAggregateInput;
    _min?: ContractTypeMinOrderByAggregateInput;
    _sum?: ContractTypeSumOrderByAggregateInput;
}
