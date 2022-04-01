import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { HideField } from '@nestjs/graphql';
import { EmployeeCreateNestedManyWithoutUserInput } from '../employee/employee-create-nested-many-without-user.input';
import { ExpensesCreateNestedManyWithoutUserInput } from '../expenses/expenses-create-nested-many-without-user.input';

@InputType()
export class UserCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Scalars.GraphQLEmailAddress, {nullable:false})
    email!: string;

    @HideField()
    fullName!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @HideField()
    lastLogin?: Date | string;

    @HideField()
    profilePicture?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => EmployeeCreateNestedManyWithoutUserInput, {nullable:true})
    Employee?: EmployeeCreateNestedManyWithoutUserInput;

    @Field(() => ExpensesCreateNestedManyWithoutUserInput, {nullable:true})
    Expenses?: ExpensesCreateNestedManyWithoutUserInput;
}
