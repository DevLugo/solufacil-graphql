import { LoanWhereInput } from './loan-where.input';
import { LoanOrderByWithRelationInput } from './loan-order-by-with-relation.input';
import { LoanWhereUniqueInput } from './loan-where-unique.input';
import { LoanScalarFieldEnum } from './loan-scalar-field.enum';
export declare class FindFirstLoanArgs {
    where?: LoanWhereInput;
    orderBy?: Array<LoanOrderByWithRelationInput>;
    cursor?: LoanWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof LoanScalarFieldEnum>;
}
