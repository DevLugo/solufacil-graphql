import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpensesCreateWithoutEmployeeInput } from './expenses-create-without-employee.input';
import { ExpensesCreateOrConnectWithoutEmployeeInput } from './expenses-create-or-connect-without-employee.input';
import { ExpensesUpsertWithWhereUniqueWithoutEmployeeInput } from './expenses-upsert-with-where-unique-without-employee.input';
import { ExpensesCreateManyEmployeeInputEnvelope } from './expenses-create-many-employee-input-envelope.input';
import { ExpensesWhereUniqueInput } from './expenses-where-unique.input';
import { ExpensesUpdateWithWhereUniqueWithoutEmployeeInput } from './expenses-update-with-where-unique-without-employee.input';
import { ExpensesUpdateManyWithWhereWithoutEmployeeInput } from './expenses-update-many-with-where-without-employee.input';
import { ExpensesScalarWhereInput } from './expenses-scalar-where.input';

@InputType()
export class ExpensesUpdateManyWithoutEmployeeInput {

    @Field(() => [ExpensesCreateWithoutEmployeeInput], {nullable:true})
    create?: Array<ExpensesCreateWithoutEmployeeInput>;

    @Field(() => [ExpensesCreateOrConnectWithoutEmployeeInput], {nullable:true})
    connectOrCreate?: Array<ExpensesCreateOrConnectWithoutEmployeeInput>;

    @Field(() => [ExpensesUpsertWithWhereUniqueWithoutEmployeeInput], {nullable:true})
    upsert?: Array<ExpensesUpsertWithWhereUniqueWithoutEmployeeInput>;

    @Field(() => ExpensesCreateManyEmployeeInputEnvelope, {nullable:true})
    createMany?: ExpensesCreateManyEmployeeInputEnvelope;

    @Field(() => [ExpensesWhereUniqueInput], {nullable:true})
    set?: Array<ExpensesWhereUniqueInput>;

    @Field(() => [ExpensesWhereUniqueInput], {nullable:true})
    disconnect?: Array<ExpensesWhereUniqueInput>;

    @Field(() => [ExpensesWhereUniqueInput], {nullable:true})
    delete?: Array<ExpensesWhereUniqueInput>;

    @Field(() => [ExpensesWhereUniqueInput], {nullable:true})
    connect?: Array<ExpensesWhereUniqueInput>;

    @Field(() => [ExpensesUpdateWithWhereUniqueWithoutEmployeeInput], {nullable:true})
    update?: Array<ExpensesUpdateWithWhereUniqueWithoutEmployeeInput>;

    @Field(() => [ExpensesUpdateManyWithWhereWithoutEmployeeInput], {nullable:true})
    updateMany?: Array<ExpensesUpdateManyWithWhereWithoutEmployeeInput>;

    @Field(() => [ExpensesScalarWhereInput], {nullable:true})
    deleteMany?: Array<ExpensesScalarWhereInput>;
}
