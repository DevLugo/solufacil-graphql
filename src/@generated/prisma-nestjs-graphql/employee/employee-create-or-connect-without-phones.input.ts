import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeCreateWithoutPhonesInput } from './employee-create-without-phones.input';

@InputType()
export class EmployeeCreateOrConnectWithoutPhonesInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: EmployeeWhereUniqueInput;

    @Field(() => EmployeeCreateWithoutPhonesInput, {nullable:false})
    create!: EmployeeCreateWithoutPhonesInput;
}
