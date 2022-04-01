import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutExpensesInput } from './user-create-without-expenses.input';
import { UserCreateOrConnectWithoutExpensesInput } from './user-create-or-connect-without-expenses.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutExpensesInput {

    @Field(() => UserCreateWithoutExpensesInput, {nullable:true})
    create?: UserCreateWithoutExpensesInput;

    @Field(() => UserCreateOrConnectWithoutExpensesInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutExpensesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
