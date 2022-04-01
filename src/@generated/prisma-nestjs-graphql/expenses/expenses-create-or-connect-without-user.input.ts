import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpensesWhereUniqueInput } from './expenses-where-unique.input';
import { ExpensesCreateWithoutUserInput } from './expenses-create-without-user.input';

@InputType()
export class ExpensesCreateOrConnectWithoutUserInput {

    @Field(() => ExpensesWhereUniqueInput, {nullable:false})
    where!: ExpensesWhereUniqueInput;

    @Field(() => ExpensesCreateWithoutUserInput, {nullable:false})
    create!: ExpensesCreateWithoutUserInput;
}
