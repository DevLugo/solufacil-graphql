import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeCreateWithoutUserInput } from './employee-create-without-user.input';

@InputType()
export class EmployeeCreateOrConnectWithoutUserInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: EmployeeWhereUniqueInput;

    @Field(() => EmployeeCreateWithoutUserInput, {nullable:false})
    create!: EmployeeCreateWithoutUserInput;
}
