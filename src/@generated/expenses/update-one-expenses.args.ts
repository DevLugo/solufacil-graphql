import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExpensesUpdateInput } from './expenses-update.input';
import { ExpensesWhereUniqueInput } from './expenses-where-unique.input';

@ArgsType()
export class UpdateOneExpensesArgs {

    @Field(() => ExpensesUpdateInput, {nullable:false})
    data!: ExpensesUpdateInput;

    @Field(() => ExpensesWhereUniqueInput, {nullable:false})
    where!: ExpensesWhereUniqueInput;
}
