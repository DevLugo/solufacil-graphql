import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeCreateWithoutJefeInput } from './employee-create-without-jefe.input';

@InputType()
export class EmployeeCreateOrConnectWithoutJefeInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: EmployeeWhereUniqueInput;

    @Field(() => EmployeeCreateWithoutJefeInput, {nullable:false})
    create!: EmployeeCreateWithoutJefeInput;
}
