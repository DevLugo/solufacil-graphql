import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpensesWhereUniqueInput } from './expenses-where-unique.input';
import { ExpensesUpdateWithoutEmployeeInput } from './expenses-update-without-employee.input';
import { ExpensesCreateWithoutEmployeeInput } from './expenses-create-without-employee.input';

@InputType()
export class ExpensesUpsertWithWhereUniqueWithoutEmployeeInput {

    @Field(() => ExpensesWhereUniqueInput, {nullable:false})
    where!: ExpensesWhereUniqueInput;

    @Field(() => ExpensesUpdateWithoutEmployeeInput, {nullable:false})
    update!: ExpensesUpdateWithoutEmployeeInput;

    @Field(() => ExpensesCreateWithoutEmployeeInput, {nullable:false})
    create!: ExpensesCreateWithoutEmployeeInput;
}
