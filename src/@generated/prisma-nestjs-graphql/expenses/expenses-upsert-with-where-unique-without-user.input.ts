import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpensesWhereUniqueInput } from './expenses-where-unique.input';
import { ExpensesUpdateWithoutUserInput } from './expenses-update-without-user.input';
import { ExpensesCreateWithoutUserInput } from './expenses-create-without-user.input';

@InputType()
export class ExpensesUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => ExpensesWhereUniqueInput, {nullable:false})
    where!: ExpensesWhereUniqueInput;

    @Field(() => ExpensesUpdateWithoutUserInput, {nullable:false})
    update!: ExpensesUpdateWithoutUserInput;

    @Field(() => ExpensesCreateWithoutUserInput, {nullable:false})
    create!: ExpensesCreateWithoutUserInput;
}
