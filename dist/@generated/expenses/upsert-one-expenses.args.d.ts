import { ExpensesWhereUniqueInput } from './expenses-where-unique.input';
import { ExpensesCreateInput } from './expenses-create.input';
import { ExpensesUpdateInput } from './expenses-update.input';
export declare class UpsertOneExpensesArgs {
    where: ExpensesWhereUniqueInput;
    create: ExpensesCreateInput;
    update: ExpensesUpdateInput;
}
