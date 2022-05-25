import { SortOrder } from '../prisma/sort-order.enum';
import { BorrowerOrderByWithRelationInput } from '../borrower/borrower-order-by-with-relation.input';
export declare class LocalOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    address?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    borrower?: BorrowerOrderByWithRelationInput;
    borrowerId?: keyof typeof SortOrder;
}
