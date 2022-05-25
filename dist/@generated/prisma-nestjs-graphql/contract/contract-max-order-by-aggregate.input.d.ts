import { SortOrder } from '../prisma/sort-order.enum';
export declare class ContractMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    borrowerId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    dueDate?: keyof typeof SortOrder;
    signDate?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    contractTypeId?: keyof typeof SortOrder;
    loanLeadId?: keyof typeof SortOrder;
    employeeId?: keyof typeof SortOrder;
}
