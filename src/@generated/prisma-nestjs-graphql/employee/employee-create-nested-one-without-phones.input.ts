import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutPhonesInput } from './employee-create-without-phones.input';
import { EmployeeCreateOrConnectWithoutPhonesInput } from './employee-create-or-connect-without-phones.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';

@InputType()
export class EmployeeCreateNestedOneWithoutPhonesInput {

    @Field(() => EmployeeCreateWithoutPhonesInput, {nullable:true})
    create?: EmployeeCreateWithoutPhonesInput;

    @Field(() => EmployeeCreateOrConnectWithoutPhonesInput, {nullable:true})
    connectOrCreate?: EmployeeCreateOrConnectWithoutPhonesInput;

    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    connect?: EmployeeWhereUniqueInput;
}
