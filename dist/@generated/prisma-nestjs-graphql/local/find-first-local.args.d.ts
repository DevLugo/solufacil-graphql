import { LocalWhereInput } from './local-where.input';
import { LocalOrderByWithRelationInput } from './local-order-by-with-relation.input';
import { LocalWhereUniqueInput } from './local-where-unique.input';
import { LocalScalarFieldEnum } from './local-scalar-field.enum';
export declare class FindFirstLocalArgs {
    where?: LocalWhereInput;
    orderBy?: Array<LocalOrderByWithRelationInput>;
    cursor?: LocalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof LocalScalarFieldEnum>;
}
