import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExpensesWhereInput } from './expenses-where.input';

@ArgsType()
export class DeleteManyExpensesArgs {

    @Field(() => ExpensesWhereInput, {nullable:true})
    where?: ExpensesWhereInput;
}
