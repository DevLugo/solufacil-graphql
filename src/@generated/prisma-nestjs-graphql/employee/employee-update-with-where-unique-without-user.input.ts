import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithoutUserInput } from './employee-update-without-user.input';

@InputType()
export class EmployeeUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: EmployeeWhereUniqueInput;

    @Field(() => EmployeeUpdateWithoutUserInput, {nullable:false})
    data!: EmployeeUpdateWithoutUserInput;
}
