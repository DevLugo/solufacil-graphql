import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithoutUserInput } from './employee-update-without-user.input';
import { EmployeeCreateWithoutUserInput } from './employee-create-without-user.input';

@InputType()
export class EmployeeUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: EmployeeWhereUniqueInput;

    @Field(() => EmployeeUpdateWithoutUserInput, {nullable:false})
    update!: EmployeeUpdateWithoutUserInput;

    @Field(() => EmployeeCreateWithoutUserInput, {nullable:false})
    create!: EmployeeCreateWithoutUserInput;
}
