import { SortOrder } from '../prisma/sort-order.enum';
import { ContractCountOrderByAggregateInput } from './contract-count-order-by-aggregate.input';
import { ContractMaxOrderByAggregateInput } from './contract-max-order-by-aggregate.input';
import { ContractMinOrderByAggregateInput } from './contract-min-order-by-aggregate.input';
export declare class ContractOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    borrowerId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    dueDate?: keyof typeof SortOrder;
    signDate?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    contractTypeId?: keyof typeof SortOrder;
    loanLeadId?: keyof typeof SortOrder;
    employeeId?: keyof typeof SortOrder;
    _count?: ContractCountOrderByAggregateInput;
    _max?: ContractMaxOrderByAggregateInput;
    _min?: ContractMinOrderByAggregateInput;
}
