import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithoutJefeInput } from './employee-update-without-jefe.input';

@InputType()
export class EmployeeUpdateWithWhereUniqueWithoutJefeInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: EmployeeWhereUniqueInput;

    @Field(() => EmployeeUpdateWithoutJefeInput, {nullable:false})
    data!: EmployeeUpdateWithoutJefeInput;
}
