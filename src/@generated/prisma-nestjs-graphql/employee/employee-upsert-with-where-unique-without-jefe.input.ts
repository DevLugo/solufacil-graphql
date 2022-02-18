import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithoutJefeInput } from './employee-update-without-jefe.input';
import { EmployeeCreateWithoutJefeInput } from './employee-create-without-jefe.input';

@InputType()
export class EmployeeUpsertWithWhereUniqueWithoutJefeInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: EmployeeWhereUniqueInput;

    @Field(() => EmployeeUpdateWithoutJefeInput, {nullable:false})
    update!: EmployeeUpdateWithoutJefeInput;

    @Field(() => EmployeeCreateWithoutJefeInput, {nullable:false})
    create!: EmployeeCreateWithoutJefeInput;
}
