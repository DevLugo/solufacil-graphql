import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateNestedOneWithoutPhonesInput } from '../employee/employee-create-nested-one-without-phones.input';
import { AvalCreateNestedOneWithoutPhonesInput } from '../aval/aval-create-nested-one-without-phones.input';

@InputType()
export class PhoneCreateWithoutBorrowerInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    number!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => EmployeeCreateNestedOneWithoutPhonesInput, {nullable:true})
    Employee?: EmployeeCreateNestedOneWithoutPhonesInput;

    @Field(() => AvalCreateNestedOneWithoutPhonesInput, {nullable:true})
    aval?: AvalCreateNestedOneWithoutPhonesInput;
}
