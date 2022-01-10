import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { EmployeeCreateNestedOneWithoutPhonesInput } from '../employee/employee-create-nested-one-without-phones.input';
import { AvalCreateNestedOneWithoutPhonesInput } from '../aval/aval-create-nested-one-without-phones.input';

@InputType()
export class PhoneCreateWithoutBorrowerInput {

    @HideField()
    id?: string;

    @Field(() => String, {nullable:false})
    number!: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    Employee?: EmployeeCreateNestedOneWithoutPhonesInput;

    @Field(() => AvalCreateNestedOneWithoutPhonesInput, {nullable:true})
    aval?: AvalCreateNestedOneWithoutPhonesInput;
}
