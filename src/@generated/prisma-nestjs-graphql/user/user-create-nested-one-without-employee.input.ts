import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutEmployeeInput } from './user-create-without-employee.input';
import { UserCreateOrConnectWithoutEmployeeInput } from './user-create-or-connect-without-employee.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutEmployeeInput {

    @Field(() => UserCreateWithoutEmployeeInput, {nullable:true})
    create?: UserCreateWithoutEmployeeInput;

    @Field(() => UserCreateOrConnectWithoutEmployeeInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
