import { SortOrder } from '../prisma/sort-order.enum';
import { PhoneOrderByRelationAggregateInput } from '../phone/phone-order-by-relation-aggregate.input';
import { DocumentOrderByRelationAggregateInput } from '../document/document-order-by-relation-aggregate.input';
import { ContractOrderByRelationAggregateInput } from '../contract/contract-order-by-relation-aggregate.input';
import { LocalOrderByRelationAggregateInput } from '../local/local-order-by-relation-aggregate.input';
export declare class BorrowerOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    address?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    phones?: PhoneOrderByRelationAggregateInput;
    documents?: DocumentOrderByRelationAggregateInput;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    Contract?: ContractOrderByRelationAggregateInput;
    Local?: LocalOrderByRelationAggregateInput;
}
