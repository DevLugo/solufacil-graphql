import { ExpensesWhereInput } from './expenses-where.input';
import { ExpensesOrderByWithAggregationInput } from './expenses-order-by-with-aggregation.input';
import { ExpensesScalarFieldEnum } from './expenses-scalar-field.enum';
import { ExpensesScalarWhereWithAggregatesInput } from './expenses-scalar-where-with-aggregates.input';
import { ExpensesCountAggregateInput } from './expenses-count-aggregate.input';
import { ExpensesAvgAggregateInput } from './expenses-avg-aggregate.input';
import { ExpensesSumAggregateInput } from './expenses-sum-aggregate.input';
import { ExpensesMinAggregateInput } from './expenses-min-aggregate.input';
import { ExpensesMaxAggregateInput } from './expenses-max-aggregate.input';
export declare class ExpensesGroupByArgs {
    where?: ExpensesWhereInput;
    orderBy?: Array<ExpensesOrderByWithAggregationInput>;
    by: Array<keyof typeof ExpensesScalarFieldEnum>;
    having?: ExpensesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ExpensesCountAggregateInput;
    _avg?: ExpensesAvgAggregateInput;
    _sum?: ExpensesSumAggregateInput;
    _min?: ExpensesMinAggregateInput;
    _max?: ExpensesMaxAggregateInput;
}
