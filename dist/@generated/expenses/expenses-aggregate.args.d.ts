import { ExpensesWhereInput } from './expenses-where.input';
import { ExpensesOrderByWithRelationInput } from './expenses-order-by-with-relation.input';
import { ExpensesWhereUniqueInput } from './expenses-where-unique.input';
import { ExpensesCountAggregateInput } from './expenses-count-aggregate.input';
import { ExpensesAvgAggregateInput } from './expenses-avg-aggregate.input';
import { ExpensesSumAggregateInput } from './expenses-sum-aggregate.input';
import { ExpensesMinAggregateInput } from './expenses-min-aggregate.input';
import { ExpensesMaxAggregateInput } from './expenses-max-aggregate.input';
export declare class ExpensesAggregateArgs {
    where?: ExpensesWhereInput;
    orderBy?: Array<ExpensesOrderByWithRelationInput>;
    cursor?: ExpensesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: ExpensesCountAggregateInput;
    _avg?: ExpensesAvgAggregateInput;
    _sum?: ExpensesSumAggregateInput;
    _min?: ExpensesMinAggregateInput;
    _max?: ExpensesMaxAggregateInput;
}
