import { ExpensesCountAggregate } from './expenses-count-aggregate.output';
import { ExpensesAvgAggregate } from './expenses-avg-aggregate.output';
import { ExpensesSumAggregate } from './expenses-sum-aggregate.output';
import { ExpensesMinAggregate } from './expenses-min-aggregate.output';
import { ExpensesMaxAggregate } from './expenses-max-aggregate.output';
export declare class AggregateExpenses {
    _count?: ExpensesCountAggregate;
    _avg?: ExpensesAvgAggregate;
    _sum?: ExpensesSumAggregate;
    _min?: ExpensesMinAggregate;
    _max?: ExpensesMaxAggregate;
}
