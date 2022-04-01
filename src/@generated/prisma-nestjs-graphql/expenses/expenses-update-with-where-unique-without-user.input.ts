import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpensesWhereUniqueInput } from './expenses-where-unique.input';
import { ExpensesUpdateWithoutUserInput } from './expenses-update-without-user.input';

@InputType()
export class ExpensesUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => ExpensesWhereUniqueInput, {nullable:false})
    where!: ExpensesWhereUniqueInput;

    @Field(() => ExpensesUpdateWithoutUserInput, {nullable:false})
    data!: ExpensesUpdateWithoutUserInput;
}
