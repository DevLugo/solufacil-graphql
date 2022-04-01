import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpensesWhereInput } from './expenses-where.input';

@InputType()
export class ExpensesListRelationFilter {

    @Field(() => ExpensesWhereInput, {nullable:true})
    every?: ExpensesWhereInput;

    @Field(() => ExpensesWhereInput, {nullable:true})
    some?: ExpensesWhereInput;

    @Field(() => ExpensesWhereInput, {nullable:true})
    none?: ExpensesWhereInput;
}
