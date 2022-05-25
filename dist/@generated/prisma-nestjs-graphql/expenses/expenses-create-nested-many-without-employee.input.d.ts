import { ExpensesCreateWithoutEmployeeInput } from './expenses-create-without-employee.input';
import { ExpensesCreateOrConnectWithoutEmployeeInput } from './expenses-create-or-connect-without-employee.input';
import { ExpensesCreateManyEmployeeInputEnvelope } from './expenses-create-many-employee-input-envelope.input';
import { ExpensesWhereUniqueInput } from './expenses-where-unique.input';
export declare class ExpensesCreateNestedManyWithoutEmployeeInput {
    create?: Array<ExpensesCreateWithoutEmployeeInput>;
    connectOrCreate?: Array<ExpensesCreateOrConnectWithoutEmployeeInput>;
    createMany?: ExpensesCreateManyEmployeeInputEnvelope;
    connect?: Array<ExpensesWhereUniqueInput>;
}
