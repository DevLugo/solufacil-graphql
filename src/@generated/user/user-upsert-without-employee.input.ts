import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutEmployeeInput } from './user-update-without-employee.input';
import { UserCreateWithoutEmployeeInput } from './user-create-without-employee.input';

@InputType()
export class UserUpsertWithoutEmployeeInput {

    @Field(() => UserUpdateWithoutEmployeeInput, {nullable:false})
    update!: UserUpdateWithoutEmployeeInput;

    @Field(() => UserCreateWithoutEmployeeInput, {nullable:false})
    create!: UserCreateWithoutEmployeeInput;
}
