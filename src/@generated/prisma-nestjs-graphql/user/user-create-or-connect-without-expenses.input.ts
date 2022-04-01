import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutExpensesInput } from './user-create-without-expenses.input';

@InputType()
export class UserCreateOrConnectWithoutExpensesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutExpensesInput, {nullable:false})
    create!: UserCreateWithoutExpensesInput;
}
