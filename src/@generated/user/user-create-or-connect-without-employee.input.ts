import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutEmployeeInput } from './user-create-without-employee.input';

@InputType()
export class UserCreateOrConnectWithoutEmployeeInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutEmployeeInput, {nullable:false})
    create!: UserCreateWithoutEmployeeInput;
}
