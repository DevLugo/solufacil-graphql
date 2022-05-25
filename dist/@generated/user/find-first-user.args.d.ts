import { UserWhereInput } from './user-where.input';
import { UserOrderByWithRelationInput } from './user-order-by-with-relation.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserScalarFieldEnum } from './user-scalar-field.enum';
export declare class FindFirstUserArgs {
    where?: UserWhereInput;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}
