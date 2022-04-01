import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExpensesCreateInput } from './expenses-create.input';

@ArgsType()
export class CreateOneExpensesArgs {

    @Field(() => ExpensesCreateInput, {nullable:false})
    data!: ExpensesCreateInput;
}
