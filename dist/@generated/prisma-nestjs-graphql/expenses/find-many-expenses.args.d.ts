import { ExpensesWhereInput } from './expenses-where.input';
import { ExpensesOrderByWithRelationInput } from './expenses-order-by-with-relation.input';
import { ExpensesWhereUniqueInput } from './expenses-where-unique.input';
import { ExpensesScalarFieldEnum } from './expenses-scalar-field.enum';
export declare class FindManyExpensesArgs {
    where?: ExpensesWhereInput;
    orderBy?: Array<ExpensesOrderByWithRelationInput>;
    cursor?: ExpensesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ExpensesScalarFieldEnum>;
}
