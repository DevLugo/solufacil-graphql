import { BorrowerWhereInput } from './borrower-where.input';
import { BorrowerOrderByWithRelationInput } from './borrower-order-by-with-relation.input';
import { BorrowerWhereUniqueInput } from './borrower-where-unique.input';
import { BorrowerScalarFieldEnum } from './borrower-scalar-field.enum';
export declare class FindFirstBorrowerArgs {
    where?: BorrowerWhereInput;
    orderBy?: Array<BorrowerOrderByWithRelationInput>;
    cursor?: BorrowerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof BorrowerScalarFieldEnum>;
}
