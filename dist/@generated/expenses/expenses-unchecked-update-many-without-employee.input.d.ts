import { ExpensesCreateWithoutEmployeeInput } from './expenses-create-without-employee.input';
import { ExpensesCreateOrConnectWithoutEmployeeInput } from './expenses-create-or-connect-without-employee.input';
import { ExpensesUpsertWithWhereUniqueWithoutEmployeeInput } from './expenses-upsert-with-where-unique-without-employee.input';
import { ExpensesCreateManyEmployeeInputEnvelope } from './expenses-create-many-employee-input-envelope.input';
import { ExpensesWhereUniqueInput } from './expenses-where-unique.input';
import { ExpensesUpdateWithWhereUniqueWithoutEmployeeInput } from './expenses-update-with-where-unique-without-employee.input';
import { ExpensesUpdateManyWithWhereWithoutEmployeeInput } from './expenses-update-many-with-where-without-employee.input';
import { ExpensesScalarWhereInput } from './expenses-scalar-where.input';
export declare class ExpensesUncheckedUpdateManyWithoutEmployeeInput {
    create?: Array<ExpensesCreateWithoutEmployeeInput>;
    connectOrCreate?: Array<ExpensesCreateOrConnectWithoutEmployeeInput>;
    upsert?: Array<ExpensesUpsertWithWhereUniqueWithoutEmployeeInput>;
    createMany?: ExpensesCreateManyEmployeeInputEnvelope;
    set?: Array<ExpensesWhereUniqueInput>;
    disconnect?: Array<ExpensesWhereUniqueInput>;
    delete?: Array<ExpensesWhereUniqueInput>;
    connect?: Array<ExpensesWhereUniqueInput>;
    update?: Array<ExpensesUpdateWithWhereUniqueWithoutEmployeeInput>;
    updateMany?: Array<ExpensesUpdateManyWithWhereWithoutEmployeeInput>;
    deleteMany?: Array<ExpensesScalarWhereInput>;
}
