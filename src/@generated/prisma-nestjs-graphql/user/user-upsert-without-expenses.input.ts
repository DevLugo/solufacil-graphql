import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutExpensesInput } from './user-update-without-expenses.input';
import { UserCreateWithoutExpensesInput } from './user-create-without-expenses.input';

@InputType()
export class UserUpsertWithoutExpensesInput {

    @Field(() => UserUpdateWithoutExpensesInput, {nullable:false})
    update!: UserUpdateWithoutExpensesInput;

    @Field(() => UserCreateWithoutExpensesInput, {nullable:false})
    create!: UserCreateWithoutExpensesInput;
}
