import { Decimal } from '@prisma/client/runtime';
import { PaymentState } from '../prisma/payment-state.enum';
import { ExpensesCountAggregate } from './expenses-count-aggregate.output';
import { ExpensesAvgAggregate } from './expenses-avg-aggregate.output';
import { ExpensesSumAggregate } from './expenses-sum-aggregate.output';
import { ExpensesMinAggregate } from './expenses-min-aggregate.output';
import { ExpensesMaxAggregate } from './expenses-max-aggregate.output';
export declare class ExpensesGroupBy {
    id: string;
    amountToPay: Decimal;
    status: keyof typeof PaymentState;
    dueDate: Date | string;
    payedAt: Date | string;
    createdAt: Date | string;
    updatedAt: Date | string;
    userId?: string;
    employeeId: string;
    _count?: ExpensesCountAggregate;
    _avg?: ExpensesAvgAggregate;
    _sum?: ExpensesSumAggregate;
    _min?: ExpensesMinAggregate;
    _max?: ExpensesMaxAggregate;
}
