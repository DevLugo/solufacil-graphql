import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutExpensesInput } from './user-create-without-expenses.input';
import { UserCreateOrConnectWithoutExpensesInput } from './user-create-or-connect-without-expenses.input';
import { UserUpsertWithoutExpensesInput } from './user-upsert-without-expenses.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutExpensesInput } from './user-update-without-expenses.input';

@InputType()
export class UserUpdateOneWithoutExpensesInput {

    @Field(() => UserCreateWithoutExpensesInput, {nullable:true})
    create?: UserCreateWithoutExpensesInput;

    @Field(() => UserCreateOrConnectWithoutExpensesInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutExpensesInput;

    @Field(() => UserUpsertWithoutExpensesInput, {nullable:true})
    upsert?: UserUpsertWithoutExpensesInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutExpensesInput, {nullable:true})
    update?: UserUpdateWithoutExpensesInput;
}
