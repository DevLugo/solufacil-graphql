import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpensesScalarWhereInput } from './expenses-scalar-where.input';
import { ExpensesUpdateManyMutationInput } from './expenses-update-many-mutation.input';

@InputType()
export class ExpensesUpdateManyWithWhereWithoutEmployeeInput {

    @Field(() => ExpensesScalarWhereInput, {nullable:false})
    where!: ExpensesScalarWhereInput;

    @Field(() => ExpensesUpdateManyMutationInput, {nullable:false})
    data!: ExpensesUpdateManyMutationInput;
}
