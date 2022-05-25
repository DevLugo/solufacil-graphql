import { SortOrder } from '../prisma/sort-order.enum';
import { PhoneOrderByRelationAggregateInput } from '../phone/phone-order-by-relation-aggregate.input';
import { DocumentOrderByRelationAggregateInput } from '../document/document-order-by-relation-aggregate.input';
export declare class AvalOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    phones?: PhoneOrderByRelationAggregateInput;
    email?: keyof typeof SortOrder;
    fullName?: keyof typeof SortOrder;
    firstName?: keyof typeof SortOrder;
    lastName?: keyof typeof SortOrder;
    documents?: DocumentOrderByRelationAggregateInput;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
