import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpensesCreateWithoutEmployeeInput } from './expenses-create-without-employee.input';
import { ExpensesCreateOrConnectWithoutEmployeeInput } from './expenses-create-or-connect-without-employee.input';
import { ExpensesCreateManyEmployeeInputEnvelope } from './expenses-create-many-employee-input-envelope.input';
import { ExpensesWhereUniqueInput } from './expenses-where-unique.input';

@InputType()
export class ExpensesUncheckedCreateNestedManyWithoutEmployeeInput {

    @Field(() => [ExpensesCreateWithoutEmployeeInput], {nullable:true})
    create?: Array<ExpensesCreateWithoutEmployeeInput>;

    @Field(() => [ExpensesCreateOrConnectWithoutEmployeeInput], {nullable:true})
    connectOrCreate?: Array<ExpensesCreateOrConnectWithoutEmployeeInput>;

    @Field(() => ExpensesCreateManyEmployeeInputEnvelope, {nullable:true})
    createMany?: ExpensesCreateManyEmployeeInputEnvelope;

    @Field(() => [ExpensesWhereUniqueInput], {nullable:true})
    connect?: Array<ExpensesWhereUniqueInput>;
}
