import { AvalWhereInput } from './aval-where.input';
import { AvalOrderByWithRelationInput } from './aval-order-by-with-relation.input';
import { AvalWhereUniqueInput } from './aval-where-unique.input';
import { AvalScalarFieldEnum } from './aval-scalar-field.enum';
export declare class FindFirstAvalArgs {
    where?: AvalWhereInput;
    orderBy?: Array<AvalOrderByWithRelationInput>;
    cursor?: AvalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof AvalScalarFieldEnum>;
}
