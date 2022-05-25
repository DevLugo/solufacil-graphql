import { CustomerWhereInput } from './customer-where.input';
import { CustomerOrderByWithRelationInput } from './customer-order-by-with-relation.input';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { CustomerScalarFieldEnum } from './customer-scalar-field.enum';
export declare class FindFirstCustomerArgs {
    where?: CustomerWhereInput;
    orderBy?: Array<CustomerOrderByWithRelationInput>;
    cursor?: CustomerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof CustomerScalarFieldEnum>;
}
