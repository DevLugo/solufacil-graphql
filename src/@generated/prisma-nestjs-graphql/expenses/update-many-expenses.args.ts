import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExpensesUpdateManyMutationInput } from './expenses-update-many-mutation.input';
import { ExpensesWhereInput } from './expenses-where.input';

@ArgsType()
export class UpdateManyExpensesArgs {

    @Field(() => ExpensesUpdateManyMutationInput, {nullable:false})
    data!: ExpensesUpdateManyMutationInput;

    @Field(() => ExpensesWhereInput, {nullable:true})
    where?: ExpensesWhereInput;
}
