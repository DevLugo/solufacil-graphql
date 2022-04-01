import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExpensesWhereUniqueInput } from './expenses-where-unique.input';
import { ExpensesCreateInput } from './expenses-create.input';
import { ExpensesUpdateInput } from './expenses-update.input';

@ArgsType()
export class UpsertOneExpensesArgs {

    @Field(() => ExpensesWhereUniqueInput, {nullable:false})
    where!: ExpensesWhereUniqueInput;

    @Field(() => ExpensesCreateInput, {nullable:false})
    create!: ExpensesCreateInput;

    @Field(() => ExpensesUpdateInput, {nullable:false})
    update!: ExpensesUpdateInput;
}
