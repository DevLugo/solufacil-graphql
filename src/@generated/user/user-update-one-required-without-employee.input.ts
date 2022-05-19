import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutEmployeeInput } from './user-create-without-employee.input';
import { UserCreateOrConnectWithoutEmployeeInput } from './user-create-or-connect-without-employee.input';
import { UserUpsertWithoutEmployeeInput } from './user-upsert-without-employee.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutEmployeeInput } from './user-update-without-employee.input';

@InputType()
export class UserUpdateOneRequiredWithoutEmployeeInput {

    @Field(() => UserCreateWithoutEmployeeInput, {nullable:true})
    create?: UserCreateWithoutEmployeeInput;

    @Field(() => UserCreateOrConnectWithoutEmployeeInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeInput;

    @Field(() => UserUpsertWithoutEmployeeInput, {nullable:true})
    upsert?: UserUpsertWithoutEmployeeInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutEmployeeInput, {nullable:true})
    update?: UserUpdateWithoutEmployeeInput;
}
